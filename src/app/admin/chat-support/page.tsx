'use client'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { decodeToken, getAccessTokenFromLocalStorage } from '@/lib/utils'
import friendServ from '@/services/friendServ'
import { MessageCircle, Send } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'

const socket = io(process.env.NEXT_PUBLIC_PORT_SOCKET)

export default function ChatSupport() {
  const [userId, setUserId] = useState<number | null>(null)
  const [inputValue, setInputValue] = useState('')
  const [selectedFriendId, setSelectedFriendId] = useState(null)
  const [listFriends, setListFriends] = useState<{ user_id: number }[]>([])
  const [messages, setMessages] = useState<any[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isSending, setIsSending] = useState(false)

  useEffect(() => {
    if (userId !== null) {
      friendServ
        .getFriendByUserId(userId)
        .then((res) => {
          setListFriends(res.payload.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [userId])

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

  useEffect(() => {
    if (selectedFriendId !== null) {
      const to = selectedFriendId
      const from = userId
      if (from === null) return
      const roomId = to > from ? `${from}-${to}` : `${to}-${from}`
      localStorage.setItem('roomId', roomId)
      socket.emit('join-room', roomId)
    }
  }, [selectedFriendId, userId])

  const handleFriendClick = (friendId: any) => {
    setSelectedFriendId(friendId)
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

  return (
    <div className='flex h-[calc(100vh-3rem)]'>
      {/* Sidebar - danh sách người dùng */}
      <div className='w-1/4 border-r p-4 space-y-2'>
        <h2 className='text-lg font-bold mb-2'>User Chats</h2>
        {listFriends.map((friend, index) => (
          <Button key={index} className='w-full justify-start' onClick={() => handleFriendClick(friend?.user_id)}>
            <Avatar className='mr-2 h-6 w-6 bg-primary rounded-[100%] text-white flex items-center justify-center'>
              <span className='text-lg font-semibold'>2</span>
            </Avatar>
            User #2
          </Button>
        ))}
      </div>

      {/* Chat box */}
      <div className='w-3/4 p-4 flex flex-col'>
        <Card className='flex-1 flex flex-col'>
          <CardHeader className='flex flex-row justify-between items-center bg-muted'>
            <div className='flex items-center space-x-2'>
              <Avatar className='h-8 w-8 bg-primary rounded-[100%] text-white flex items-center justify-center'>
                <MessageCircle className='h-4 w-4' />
              </Avatar>
              <CardTitle className='text-base'>
                {selectedFriendId ? `User #${selectedFriendId}` : 'Select a user to start chatting'}
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className='flex-1 overflow-y-auto max-h-[78vh] p-4 bg-muted/40'>
            {messages &&
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${message.user_id === userId ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] px-4 py-2 rounded-lg text-sm shadow ${
                      message.user_id === userId ? 'bg-primary text-white rounded-tr-none' : 'bg-white rounded-tl-none'
                    }`}
                  >
                    <p>{message.content}</p>
                    <p className='text-xs mt-1 opacity-70'>{}</p>
                  </div>
                </div>
              ))}
            <div ref={messagesEndRef} />
          </CardContent>

          {selectedFriendId && (
            <CardFooter className='border-t p-3'>
              <div className='flex w-full space-x-2'>
                <Input
                  placeholder='Type your message...'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage(e)}
                />
                <Button onClick={sendMessage} disabled={!inputValue.trim()}>
                  <Send className='h-4 w-4' />
                </Button>
              </div>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  )
}
