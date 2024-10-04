"use client"

import { useState } from 'react'
import Image from 'next/image'
import { X, Plus, Minus, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function CartOverlay() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Tray Table", price: 119.10, quantity: 2, image: "/placeholder.svg?height=80&width=80" },
    { id: 2, name: "Tray Table", price: 119.10, quantity: 1, image: "/placeholder.svg?height=80&width=80" },
    { id: 3, name: "Table Lamp", price: 39.00, quantity: 1, image: "/placeholder.svg?height=80&width=80" },
  ])

  const toggleCart = () => setIsOpen(!isOpen)

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
      ).filter(item => item.quantity > 0)
    )
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const total = subtotal // Add tax or shipping if needed

  return (
    <>
      <button onClick={toggleCart} className="relative p-2">
        <ShoppingCart className="h-6 w-6" />
        {cartItems.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
            {cartItems.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lg">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Cart</h2>
              <button onClick={toggleCart} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center py-4 border-b">
                  <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md mr-4" />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-500 hover:text-gray-700">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-500 hover:text-gray-700">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <button onClick={() => updateQuantity(item.id, -item.quantity)} className="text-gray-500 hover:text-gray-700 ml-4">
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
            <div className="p-4 border-t mt-auto">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold mb-4">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}