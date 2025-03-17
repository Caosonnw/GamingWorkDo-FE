'use client'

import React, { useContext } from 'react'
import { createContext } from 'react'

const AddToCartContext = createContext({
  addToCart: (productId: string) => {},
  cart: [] as string[]
})
export const useAddToCartContext = () => {
  return useContext(AddToCartContext)
}

export default function AddToCartProvider({ children }: { children: React.ReactNode }) {
  return <div>AddToCartProvider</div>
}
