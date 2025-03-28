'use client'

import React, { createContext, useContext, useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { decodeToken, getAccessTokenFromLocalStorage } from '@/lib/utils'
import { useGetCartByUserId } from '@/queries/useCart'

type CartItem = {
  cart_id: number
  user_id: number
  quantity: number
  variant_id: number
  users: {
    user_id: number
    full_name: string
    email: string
    phone_number: string
    date_of_birth: string
    role: string
  }
  product_variants: {
    variant_id: number
    product_id: number
    variant_name: string
    variant_price: number
    product_image_main: string
    product_image_hover: string
    product_status: string
    attributes: Record<string, string>
    rating: number
    update_at: string
    created_at: string
  }
}

type CartContextType = {
  cart: CartItem[]
  removeFromCart: (cartId: number) => void
  isOpen: boolean
  toggleCart: () => void
}

const AddToCartContext = createContext<CartContextType | undefined>(undefined)

export const useAddToCartContext = () => {
  const context = useContext(AddToCartContext)
  if (!context) throw new Error('useAddToCartContext must be used within a AddToCartProvider')
  return context
}

export default function AddToCartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const removeFromCart = (cartId: number) => {
    setCart((prev) => prev.filter((item) => item.cart_id !== cartId))
  }

  const toggleCart = () => setIsOpen((prev) => !prev)

  return (
    <AddToCartContext.Provider value={{ cart, removeFromCart, isOpen, toggleCart }}>
      {children}
      <CartPopup setCart={setCart} isOpen={isOpen} toggleCart={toggleCart} cart={cart} />
    </AddToCartContext.Provider>
  )
}

function CartPopup({
  isOpen,
  toggleCart,
  cart,
  setCart
}: {
  isOpen: boolean
  toggleCart: () => void
  cart: CartItem[]
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
}) {
  const [userId, setUserId] = useState<number | null>(null)
  const { data } = useGetCartByUserId(userId)
  const popupRef = useRef<HTMLDivElement>(null)
  const { removeFromCart } = useAddToCartContext()

  useEffect(() => {
    const token = getAccessTokenFromLocalStorage()
    if (token) {
      const decodedToken = decodeToken(token)
      if (decodedToken?.user_id) {
        setUserId(decodedToken.user_id)
      }
    }
  }, [])

  useEffect(() => {
    if (data?.payload?.data) {
      setCart(data.payload.data)
    }
  }, [data])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        toggleCart()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, toggleCart])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3 }}
          className='fixed top-0 right-0 h-full bg-white shadow-lg border-l border-gray-200 p-4 z-50'
          style={{ width: '400px' }}
          ref={popupRef}
        >
          <div className='flex justify-between items-center mb-4 mini-cart-header'>
            <h4 className='text-2xl font-semibold py-2'>Your Cart</h4>
            <Button className='common-close' size='icon' onClick={toggleCart}>
              <X className='w-5 h-5' />
            </Button>
          </div>
          <div style={{ marginTop: '25px' }}>
            {cart.length > 0 ? (
              <div className='webi-main-cart-items'>
                <div className='free-shipping-bar'>
                  <div className='free-shipping-txt'>
                    You’re <b>$50.00</b> away from <b>FREE shipping.</b>
                    <div className='cart-progress-bar'>
                      <progress max={90000} value={85000}>
                        $0.00
                      </progress>
                      <div className='progress-icon'>
                        <svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' data-name='Layer 1' viewBox='0 0 512 512'>
                          <title>Delivery Truck</title>
                          <path d='M507.219,275.177,466.234,185.01A42.749,42.749,0,0,0,427.4,160H352V128a32.035,32.035,0,0,0-32-32H53.333a32.035,32.035,0,0,0-32,32V256a10.667,10.667,0,1,0,21.333,0V128a10.679,10.679,0,0,1,10.667-10.667H320A10.679,10.679,0,0,1,330.667,128V298.667A10.681,10.681,0,0,1,320,309.333H192a10.667,10.667,0,0,0,0,21.333H320a32.035,32.035,0,0,0,32-32V181.333h75.4a21.381,21.381,0,0,1,19.422,12.505l4.013,8.828h-45.5A21.356,21.356,0,0,0,384,224v42.667A21.354,21.354,0,0,0,405.333,288h83.94a31.775,31.775,0,0,1,1.393,9.24v44.094A10.681,10.681,0,0,1,480,352H446.924a53.336,53.336,0,0,0-104.516,0H169.591a53.336,53.336,0,0,0-104.516,0H53.333a10.681,10.681,0,0,1-10.667-10.667V330.667a10.667,10.667,0,0,0,0-21.333h-32a10.667,10.667,0,0,0,0,21.333H21.333v10.667a32.035,32.035,0,0,0,32,32H65.076a53.336,53.336,0,0,0,104.516,0H342.409a53.336,53.336,0,0,0,104.516,0H480a32.035,32.035,0,0,0,32-32V297.24A52.9,52.9,0,0,0,507.219,275.177ZM117.333,394.667a32,32,0,1,1,32-32A32.035,32.035,0,0,1,117.333,394.667Zm277.333,0a32,32,0,1,1,32-32A32.035,32.035,0,0,1,394.667,394.667ZM405.333,224h55.194l19.393,42.667H405.333Z'></path>
                          <path d='M10.667,298.667H64a10.667,10.667,0,0,0,0-21.333H10.667a10.667,10.667,0,0,0,0,21.333Z'></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                {cart.map((item, index) => (
                  <div key={index} className='mini-cart-item flex items-center' style={{ marginBottom: '20px' }}>
                    {/* Ảnh sản phẩm */}
                    <div className='mini-cart-image'>
                      <img src={item.product_variants.product_image_main} className='w-full h-full object-cover' />
                    </div>

                    {/* Thông tin sản phẩm */}
                    <div className='flex-1' style={{ marginLeft: '15px' }}>
                      <h3 className='text-sm font-semibold overflow-hidden'>{item.product_variants.variant_name}</h3>
                      <p className='text-gray-500 text-sm'>
                        {Object.entries(item.product_variants.attributes)
                          .map(([key, value]) => `${key}: ${value}`)
                          .join(', ')}
                      </p>
                      <p className='text-lg font-bold'>
                        {' '}
                        {new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD'
                        }).format(item.product_variants.variant_price || 0)}
                      </p>
                    </div>

                    {/* Nút xóa */}
                    <button
                      onClick={() => removeFromCart(item.cart_id)}
                      className='text-red-500 hover:text-red-700 transition'
                    >
                      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
                        <path
                          d='M12.7589 7.24609C12.5002 7.24609 12.2905 7.45577 12.2905 7.71448V16.5669C12.2905 16.8255 12.5002 17.0353 12.7589 17.0353C13.0176 17.0353 13.2273 16.8255 13.2273 16.5669V7.71448C13.2273 7.45577 13.0176 7.24609 12.7589 7.24609Z'
                          fill='#ff0000'
                        ></path>
                        <path
                          d='M7.23157 7.24609C6.97286 7.24609 6.76318 7.45577 6.76318 7.71448V16.5669C6.76318 16.8255 6.97286 17.0353 7.23157 17.0353C7.49028 17.0353 7.69995 16.8255 7.69995 16.5669V7.71448C7.69995 7.45577 7.49028 7.24609 7.23157 7.24609Z'
                          fill='#ff0000'
                        ></path>
                        <path
                          d='M3.20333 5.95419V17.4942C3.20333 18.1762 3.45344 18.8168 3.89035 19.2764C4.32525 19.7373 4.93049 19.9989 5.56391 20H14.4259C15.0594 19.9989 15.6647 19.7373 16.0994 19.2764C16.5363 18.8168 16.7864 18.1762 16.7864 17.4942V5.95419C17.6549 5.72366 18.2177 4.8846 18.1016 3.99339C17.9852 3.10236 17.2261 2.43583 16.3274 2.43565H13.9293V1.85017C13.932 1.35782 13.7374 0.885049 13.3888 0.537238C13.0403 0.18961 12.5668 -0.00396362 12.0744 6.15416e-05H7.91533C7.42298 -0.00396362 6.94948 0.18961 6.60093 0.537238C6.25239 0.885049 6.05772 1.35782 6.06046 1.85017V2.43565H3.66238C2.76367 2.43583 2.00456 3.10236 1.8882 3.99339C1.77202 4.8846 2.33481 5.72366 3.20333 5.95419ZM14.4259 19.0632H5.56391C4.76308 19.0632 4.14009 18.3753 4.14009 17.4942V5.99536H15.8497V17.4942C15.8497 18.3753 15.2267 19.0632 14.4259 19.0632ZM6.99723 1.85017C6.99412 1.60628 7.08999 1.37154 7.26307 1.19938C7.43597 1.02721 7.67126 0.932619 7.91533 0.936827H12.0744C12.3185 0.932619 12.5538 1.02721 12.7267 1.19938C12.8998 1.37136 12.9956 1.60628 12.9925 1.85017V2.43565H6.99723V1.85017ZM3.66238 3.37242H16.3274C16.793 3.37242 17.1705 3.74987 17.1705 4.21551C17.1705 4.68114 16.793 5.05859 16.3274 5.05859H3.66238C3.19674 5.05859 2.81929 4.68114 2.81929 4.21551C2.81929 3.74987 3.19674 3.37242 3.66238 3.37242Z'
                          fill='#ff0000'
                        ></path>
                        <path
                          d='M9.99523 7.24609C9.73653 7.24609 9.52686 7.45577 9.52686 7.71448V16.5669C9.52686 16.8255 9.73653 17.0353 9.99523 17.0353C10.2539 17.0353 10.4636 16.8255 10.4636 16.5669V7.71448C10.4636 7.45577 10.2539 7.24609 9.99523 7.24609Z'
                          fill='#ff0000'
                        ></path>
                        <defs>
                          <rect width='20' height='20' fill='white'></rect>
                        </defs>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className='minicart__warnings' style={{ marginTop: '250px' }}>
                <svg width={80} height={80} viewBox='0 0 71 71' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M70.6467 37.8178C70.5702 37.0338 69.9916 36.3901 69.1367 36.1376L62.2007 34.0896L68.9531 27.3346C69.4014 26.8862 69.5889 26.2933 69.4678 25.708C69.3466 25.1227 68.933 24.6244 68.3331 24.341L59.6217 20.2255C59.0524 19.9567 58.3415 20.1409 58.0329 20.6371C57.7246 21.1333 57.936 21.7535 58.5049 22.0223L67.0967 26.0813L59.9009 33.2797L37.1725 22.5419L41.3898 18.3232C41.8752 18.4785 42.3992 18.5632 42.9455 18.5632C44.6416 18.5632 46.1221 17.7453 46.8975 16.5386L53.4099 19.6153C53.5874 19.6991 53.7785 19.7389 53.9671 19.7389C54.3834 19.7389 54.7863 19.5451 54.9987 19.2036C55.307 18.7074 55.0955 18.0872 54.5265 17.8184L47.4696 14.4846C47.39 12.3681 45.392 10.6673 42.9456 10.6673C40.4491 10.6673 38.4179 12.4384 38.4179 14.6153C38.4179 15.5737 38.812 16.4532 39.4658 17.1378L35.3276 21.2775L27.9962 13.9436C27.304 13.2511 26.1738 13.073 25.2471 13.5106L22.3813 14.8645C22.0455 12.549 19.7741 10.7519 17.0289 10.7519C14.0533 10.7519 11.6323 12.8629 11.6323 15.4577C11.6323 16.8923 12.3734 18.1783 13.5383 19.0421L2.32195 24.341C1.72225 24.6244 1.30881 25.1225 1.18741 25.708C1.06631 26.2933 1.25381 26.8862 1.7021 27.3345L8.45433 34.0894L1.5185 36.1373C0.663654 36.3898 0.085057 37.0335 0.00849408 37.8175C-0.0680689 38.6014 0.377246 39.3213 1.17069 39.6962L9.31558 43.544V47.4009C9.31558 47.9652 9.84012 48.4227 10.4875 48.4227C11.1348 48.4227 11.6593 47.9652 11.6593 47.4009V44.6512L23.0544 50.0345C23.5405 50.2642 24.0829 50.381 24.6272 50.381C24.9832 50.381 25.3402 50.331 25.6827 50.2299L34.1559 47.7283V68.0589L12.1587 57.6665C11.8508 57.521 11.6595 57.2408 11.6595 56.9354V52.4453C11.6595 51.881 11.135 51.4235 10.4876 51.4235C9.84027 51.4235 9.31574 51.881 9.31574 52.4453V56.9354C9.31574 57.9915 9.97715 58.9601 11.0422 59.4633L33.757 70.1948C34.2489 70.4272 34.7884 70.5433 35.3279 70.5433C35.8675 70.5433 36.407 70.4271 36.8989 70.1948L59.6137 59.4633C60.6785 58.9601 61.3401 57.9915 61.3401 56.9354V43.5438L69.4848 39.696C70.2778 39.3216 70.7233 38.6018 70.6467 37.8178ZM37.9183 29.9126C42.0205 30.9181 44.8855 34.2166 44.8855 37.934C44.8855 38.9692 44.6722 39.9738 44.2506 40.9258L35.3276 45.1413L26.4046 40.9258C25.9832 39.9738 25.7697 38.9692 25.7697 37.934C25.7697 34.2051 28.6457 30.9038 32.7638 29.9058C33.3873 29.7547 33.7523 29.1913 33.579 28.6477C33.4059 28.104 32.7595 27.7858 32.1362 27.9368C27.0079 29.1798 23.4261 33.2906 23.4261 37.934C23.4261 38.4939 23.4782 39.0467 23.5782 39.5906L12.9475 34.5682L35.3279 23.9949L57.7082 34.5683L47.0775 39.5907C47.1775 39.0468 47.2296 38.4941 47.2296 37.9341C47.2296 33.3049 43.6616 29.1975 38.5528 27.9452C37.9297 27.7924 37.2826 28.1093 37.1076 28.6524C36.932 29.1957 37.295 29.7599 37.9183 29.9126ZM42.9455 12.7113C44.1497 12.7113 45.1295 13.5655 45.1295 14.6155C45.1295 15.6656 44.1497 16.52 42.9455 16.52C41.7412 16.52 40.7616 15.6656 40.7616 14.6155C40.7616 13.5655 41.7412 12.7113 42.9455 12.7113ZM17.0289 12.7959C18.7122 12.7959 20.0819 13.99 20.0819 15.4579C20.0819 16.9257 18.7122 18.12 17.0289 18.12C15.3456 18.12 13.9761 16.9258 13.9761 15.4579C13.9761 13.99 15.3456 12.7959 17.0289 12.7959ZM16.202 20.1084C16.4717 20.1447 16.7478 20.1637 17.0289 20.1637C19.213 20.1637 21.0966 19.0259 21.9452 17.3951L26.2868 15.344L33.4824 22.5422L10.754 33.28L3.5582 26.0816L16.202 20.1084ZM24.9308 48.2945C24.6802 48.3686 24.403 48.3478 24.1708 48.238L11.0509 42.0398C11.0475 42.0382 11.0439 42.0366 11.0404 42.0349L2.50695 38.0035L10.3786 35.6793L32.4084 46.087L24.9308 48.2945ZM58.9959 56.9358C58.9959 57.2412 58.8045 57.5214 58.4967 57.6669L36.4995 68.0593V47.7287L44.9727 50.2303C45.3152 50.3314 45.6722 50.3814 46.0283 50.3814C46.5724 50.3814 47.1149 50.2645 47.601 50.0349L58.996 44.6516V56.9358H58.9959ZM46.4842 48.238C46.2521 48.3478 45.9749 48.3686 45.7242 48.2945L38.2468 46.087L60.2767 35.6793L68.1483 38.0035L46.4842 48.238ZM68.385 38.0734C68.3848 38.0734 68.3847 38.0732 68.3844 38.0732L68.385 38.0734Z'
                    fill='#D7DBE0'
                  />
                  <path
                    d='M44.0911 58.6479L41.4028 59.9179C40.8338 60.1867 40.6225 60.8069 40.9308 61.3031C41.143 61.6445 41.5461 61.8384 41.9624 61.8384C42.1508 61.8384 42.3422 61.7986 42.5195 61.7148L45.2078 60.4448C45.7769 60.176 45.9881 59.5558 45.6798 59.0596C45.3716 58.5634 44.6606 58.3789 44.0911 58.6479Z'
                    fill='#D7DBE0'
                  />
                  <path
                    d='M21.5297 9.39234C21.7586 9.5918 22.0586 9.69167 22.3585 9.69167C22.6583 9.69167 22.9583 9.59194 23.1872 9.39234L24.1539 8.5494L25.1207 9.39234C25.3496 9.5918 25.6496 9.69167 25.9494 9.69167C26.2493 9.69167 26.5493 9.59194 26.7782 9.39234C27.2358 8.99328 27.2358 8.34626 26.7782 7.94734L25.8113 7.10427L26.7782 6.2612C27.2358 5.86214 27.2358 5.21512 26.7782 4.8162C26.3203 4.41714 25.5785 4.41714 25.1208 4.8162L24.1541 5.65914L23.1874 4.8162C22.7296 4.41714 21.9877 4.41714 21.53 4.8162C21.0724 5.21526 21.0724 5.86228 21.53 6.2612L22.4969 7.10427L21.53 7.94734C21.0721 8.34626 21.0721 8.99328 21.5297 9.39234Z'
                    fill='#D7DBE0'
                  />
                  <path
                    d='M56.2241 16.086C56.453 16.2855 56.753 16.3853 57.0528 16.3853C57.3526 16.3853 57.6526 16.2856 57.8816 16.086L58.8483 15.2431L59.815 16.086C60.0439 16.2855 60.3439 16.3853 60.6437 16.3853C60.9436 16.3853 61.2436 16.2856 61.4725 16.086C61.9301 15.6869 61.9301 15.0399 61.4725 14.641L60.5056 13.7979L61.4725 12.9549C61.9301 12.5558 61.9301 11.9088 61.4725 11.5099C61.0147 11.1108 60.2728 11.1108 59.8151 11.5099L58.8484 12.3528L57.8817 11.5099C57.4239 11.1108 56.682 11.1108 56.2244 11.5099C55.7667 11.9089 55.7667 12.5559 56.2244 12.9549L57.1912 13.7979L56.2244 14.641C55.7664 15.0399 55.7664 15.6869 56.2241 16.086Z'
                    fill='#D7DBE0'
                  />
                  <path
                    d='M49.7541 9.69083C52.5694 9.69083 54.8597 7.69378 54.8597 5.23908C54.8595 2.78425 52.5692 0.787201 49.7541 0.787201C46.9389 0.787201 44.6484 2.78425 44.6484 5.23908C44.6484 7.69378 46.9387 9.69083 49.7541 9.69083ZM49.7541 2.83085C51.2769 2.83085 52.5159 3.91112 52.5159 5.23908C52.5159 6.56691 51.2769 7.64718 49.7541 7.64718C48.2312 7.64718 46.9922 6.56691 46.9922 5.23908C46.9922 3.91112 48.2312 2.83085 49.7541 2.83085Z'
                    fill='#D7DBE0'
                  />
                  <path
                    d='M35.195 39.0057C34.0659 39.0057 33.0003 39.3321 32.1928 39.9259C31.6981 40.2897 31.6351 40.9344 32.0525 41.3657C32.4695 41.7972 33.2089 41.852 33.7037 41.4882C34.0834 41.209 34.6265 41.0492 35.1951 41.0492H35.2029C35.7744 41.0507 36.3195 41.2135 36.699 41.496C36.9198 41.6603 37.1903 41.7405 37.4592 41.7405C37.7903 41.7405 38.1194 41.6189 38.3511 41.3821C38.7712 40.9529 38.7128 40.3078 38.2206 39.9414C37.4137 39.3409 36.3444 39.0084 35.2097 39.0054C35.2048 39.0057 35.1998 39.0057 35.195 39.0057Z'
                    fill='#D7DBE0'
                  />
                  <path
                    d='M30.2373 35.9796H30.2263C29.5785 35.9713 29.0565 36.4301 29.0518 36.9943C29.0474 37.5586 29.5738 38.0193 30.221 38.0232H30.2293C30.8726 38.0232 31.3965 37.5703 31.401 37.0085C31.4055 36.4442 30.8846 35.9835 30.2373 35.9796Z'
                    fill='#D7DBE0'
                  />
                  <path
                    d='M40.1992 38.0023C40.2033 38.0029 40.2075 38.0033 40.2116 38.004C40.2453 38.0097 40.2796 38.0145 40.3142 38.0176C40.3255 38.0186 40.3369 38.0186 40.3481 38.0193C40.3742 38.0209 40.4003 38.0231 40.4271 38.0232H40.4353C40.4756 38.0232 40.5155 38.0215 40.5549 38.0179C41.1466 37.9663 41.6085 37.5309 41.6085 37.0013C41.6085 36.4786 41.1583 36.0485 40.5778 35.9876C40.5725 35.9871 40.5674 35.986 40.5621 35.9856C40.5353 35.9831 40.508 35.9824 40.4807 35.9815C40.4682 35.9811 40.456 35.9797 40.4433 35.9796H40.4372C40.4371 35.9796 40.4367 35.9796 40.4366 35.9796H40.4324H40.4255C40.425 35.9796 40.4246 35.9796 40.4241 35.9796C39.7808 35.9796 39.2624 36.4325 39.2578 36.9943C39.2539 37.4907 39.6608 37.9065 40.1992 38.0023Z'
                    fill='#D7DBE0'
                  />
                </svg>
                <h5 className='cart__empty-text font-bold py-2 text-lg'>Your cart is empty</h5>
                <a href='/collections/all' className='btn'>
                  <svg xmlns='http://www.w3.org/2000/svg' width={11} height={9} viewBox='0 0 11 9' fill='none'>
                    <path
                      d='M0.669553 4.64377C0.688588 4.68986 0.716073 4.73139 0.750639 4.76595L4.25728 8.27259C4.33041 8.34573 4.42661 8.38278 4.52279 8.38278C4.61898 8.38278 4.71517 8.34623 4.78831 8.27259C4.93509 8.12581 4.93509 7.88784 4.78831 7.74107L1.9229 4.87566H10.0332C10.2406 4.87566 10.4089 4.70734 10.4089 4.49995C10.4089 4.29255 10.2406 4.12423 10.0332 4.12423H1.92339L4.7888 1.25883C4.93558 1.11205 4.93558 0.874079 4.7888 0.727301C4.64202 0.580524 4.40405 0.580524 4.25728 0.727301L0.750639 4.23394C0.716073 4.2685 0.688588 4.31003 0.669553 4.35612C0.63148 4.44829 0.63148 4.5516 0.669553 4.64377Z'
                      fill='white'
                    />
                  </svg>
                  Continue Shopping
                </a>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
