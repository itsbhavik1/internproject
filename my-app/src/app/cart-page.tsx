"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Minus, Plus, X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface CartItem {
  id: number
  name: string
  color: string
  price: number
  quantity: number
  image: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Tray Table", color: "Black", price: 19.00, quantity: 2, image: "/placeholder.svg?height=80&width=80" },
    { id: 2, name: "Tray Table", color: "Red", price: 19.00, quantity: 2, image: "/placeholder.svg?height=80&width=80" },
    { id: 3, name: "Table lamp", color: "Gold", price: 39.00, quantity: 1, image: "/placeholder.svg?height=80&width=80" },
  ])
  const [shippingMethod, setShippingMethod] = useState('free')
  const [couponCode, setCouponCode] = useState('')

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingCost = shippingMethod === 'express' ? 15.00 : shippingMethod === 'pickup' ? 21.00 : 0
  const total = subtotal + shippingCost

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Cart</h1>
      
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">1</div>
          <span className="font-semibold">Shopping cart</span>
        </div>
        <div className="h-px bg-gray-300 flex-grow mx-4"></div>
        <div className="flex items-center">
          <div className="bg-gray-200 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center mr-2">2</div>
          <span className="text-gray-600">Checkout details</span>
        </div>
        <div className="h-px bg-gray-300 flex-grow mx-4"></div>
        <div className="flex items-center">
          <div className="bg-gray-200 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center mr-2">3</div>
          <span className="text-gray-600">Order complete</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4">Product</th>
                <th className="text-center py-4">Quantity</th>
                <th className="text-right py-4">Price</th>
                <th className="text-right py-4">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id} className="border-b">
                  <td className="py-4">
                    <div className="flex items-center">
                      <Image src={item.image} alt={item.name} width={80} height={80} className="mr-4" />
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-600">Color: {item.color}</p>
                        <button onClick={() => removeItem(item.id)} className="text-gray-500 hover:text-gray-700 mt-2">
                          <X className="h-4 w-4 inline mr-1" /> Remove
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center justify-center">
                      <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-500 hover:text-gray-700">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-500 hover:text-gray-700">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                  <td className="text-right py-4">${item.price.toFixed(2)}</td>
                  <td className="text-right py-4">${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8">
            <h3 className="font-semibold mb-2">Have a coupon?</h3>
            <p className="text-gray-600 mb-2">Add your code for an instant cart discount</p>
            <div className="flex">
              <Input
                placeholder="Coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="mr-2"
              />
              <Button variant="outline">Apply</Button>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Cart summary</h2>
            <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <RadioGroupItem value="free" id="free" />
                  <Label htmlFor="free" className="ml-2">Free shipping</Label>
                </div>
                <span>$0.00</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <RadioGroupItem value="express" id="express" />
                  <Label htmlFor="express" className="ml-2">Express shipping</Label>
                </div>
                <span>+$15.00</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <RadioGroupItem value="pickup" id="pickup" />
                  <Label htmlFor="pickup" className="ml-2">Pick Up</Label>
                </div>
                <span>+$21.00</span>
              </div>
            </RadioGroup>
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
    </div>
  )
}