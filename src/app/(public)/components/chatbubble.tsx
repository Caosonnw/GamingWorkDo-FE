'use client'

import type React from 'react'
import { useState, useRef, useEffect, Fragment } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, MessageCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import io from 'socket.io-client'
import { decodeToken, getAccessTokenFromLocalStorage } from '@/lib/utils'
import friendServ from '@/services/friendServ'

const socket = io(process.env.NEXT_PUBLIC_PORT_SOCKET)

export default function ChatBubble() {
  const [userId, setUserId] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<any[]>([])
  const [inputValue, setInputValue] = useState('')
  const [unreadCount, setUnreadCount] = useState(1)
  const [isSending, setIsSending] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    if (isOpen && userId) {
      friendServ.addFriend(userId).catch((err) => {
        console.error('Failed to add friends:', err)
      })
    }
  }, [isOpen, userId])

  useEffect(() => {
    const token = getAccessTokenFromLocalStorage()
    if (token) {
      const decodedToken = decodeToken(token)
      if (decodedToken?.user_id) {
        setUserId(decodedToken.user_id)
      }
    }
    //load danh sách chat
    socket.on('load-chat', (lstChat) => {
      setMessages(lstChat)
    })

    socket.on('mess-server', (data) => {
      setMessages((prevData) => [...prevData, data])
    })

    return () => {
      socket.off('load-chat')
      socket.off('mess-server')
    }
  }, [])

  const toggleChat = () => {
    setIsOpen((prev) => !prev)
    if (!isOpen) {
      setUnreadCount(0)

      const to = 1
      const from = userId
      if (from === null) {
        console.error('User ID is null')
        return
      }
      const roomId = to > from ? `${from}-${to}` : `${to}-${from}`
      socket.emit('join-room', roomId)
      localStorage.setItem('roomId', roomId)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (inputValue.trim() === '' || isSending) return

    setIsSending(true)

    const txtChat = inputValue
    const roomId = localStorage.getItem('roomId')

    socket.emit('send-mess', {
      user_id: userId,
      txtChat,
      roomId
    })

    setInputValue('')
    setIsSending(false)
  }

  const formatTime = (date: Date) => {}

  return (
    <div className='fixed bottom-0 right-0 z-50 p-4 md:p-6'>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='mb-4'
          >
            <Card className='w-[320px] md:w-[380px] shadow-lg border-0 rounded-lg overflow-hidden'>
              <CardHeader className='bg-[linear-gradient(93.25deg,_#0098ff_4.45%,_#7c34c8_93.88%)] p-4 flex flex-row items-center justify-between space-y-0'>
                <div className='flex items-center space-x-2'>
                  <Avatar className='flex items-center justify-center h-8 w-8 bg-primary-foreground rounded-[100%]'>
                    <MessageCircle className='h-4 w-4 text-2xl' />
                  </Avatar>
                  <div>
                    <h3 className='font-semibold text-primary-foreground'>Chat Support</h3>
                    <p className='text-xs text-primary-foreground/80'>We typically reply within minutes</p>
                  </div>
                </div>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={toggleChat}
                  className='bg-[linear-gradient(93.25deg,_#0098ff_4.45%,_#7c34c8_93.88%)] text-white hover:rotate-90 hover:text-white'
                >
                  <X className='h-5 w-5' />
                </Button>
              </CardHeader>

              <CardContent className='p-0'>
                <div className='h-[320px] overflow-y-auto p-4 bg-muted/30'>
                  {messages &&
                    messages.map((message, index) => (
                      <div
                        key={index}
                        className={`mb-4 flex ${message.user_id === userId ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg px-4 py-2 ${
                            message.user_id === userId
                              ? 'bg-primary text-primary-foreground rounded-tr-none'
                              : 'bg-muted rounded-tl-none'
                          }`}
                        >
                          <p className='text-sm'>{message.content}</p>
                          <p
                            className={`text-xs mt-1 ${
                              message.user_id === userId ? 'text-primary-foreground/70' : 'text-muted-foreground'
                            }`}
                          >
                            {/* {formatTime(new Date(message.created_at))} */}
                          </p>
                        </div>
                      </div>
                    ))}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              <CardFooter className='p-3 border-t'>
                <form onSubmit={sendMessage} className='w-full flex space-x-2'>
                  <Input
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder='Type your message...'
                    className='flex-1'
                  />
                  <Button
                    onClick={sendMessage}
                    type='submit'
                    size='icon'
                    disabled={!inputValue.trim()}
                    className='bg-[linear-gradient(93.25deg,_#0098ff_4.45%,_#7c34c8_93.88%)] !hover:cursor-pointer'
                  >
                    <Send className='h-4 w-4' />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.div exit={{ opacity: 0, y: 0, scale: 0.95 }} className='relative'>
            <Button
              onClick={toggleChat}
              size='lg'
              className='h-16 w-10 rounded-[100%] shadow-lg bg-[linear-gradient(93.25deg,_#0098ff_4.45%,_#7c34c8_93.88%)]'
            >
              <MessageCircle className='h-8 w-8' />
            </Button>

            {unreadCount > 0 && (
              <Badge
                className='absolute -top-1 -right-1 h-6 w-6 flex items-center justify-center p-0 rounded-[100%]'
                variant='destructive'
              >
                {unreadCount}
              </Badge>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
