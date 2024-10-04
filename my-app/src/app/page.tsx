import Image from 'next/image'
import Link from 'next/link';
import CartOverlay from './cart-overlay'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingCart, Truck, Headphones, CreditCard } from 'lucide-react'


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
    {/* Header */}
    <header className="border-b border-gray-200">
      
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold">3legant.</div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link href="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
          <Link href="/product" className="text-gray-600 hover:text-gray-900">Product</Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">
            <CartOverlay/>
          </button>
          <Link href="/signup" className="text-gray-600 hover:text-gray-900">Sign Up</Link>
        </div>
      </div>
    </header>

    {}
    <section className="relative">
      <Image
        src="/placeholder.svg?height=600&width=1200"
        alt="Living room"
        width={1200}
        height={600}
        className="w-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Simply Unique<br />Simply Better.</h1>
          <p className="text-xl text-white mb-8">Living Room</p>
          <Button className="bg-white text-black hover:bg-gray-100">
            Shop Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>

    {/* Categories */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Image src="/placeholder.svg?height=300&width=400" alt="Living Room" width={400} height={300} className="w-full h-64 object-cover" />
            <h3 className="text-xl font-semibold">Living Room</h3>
          </div>
          <div className="space-y-4">
            <Image src="/placeholder.svg?height=300&width=400" alt="Bedroom" width={400} height={300} className="w-full h-64 object-cover" />
            <h3 className="text-xl font-semibold">Bedroom</h3>
          </div>
          <div className="space-y-4">
            <Image src="/placeholder.svg?height=300&width=400" alt="Kitchen" width={400} height={300} className="w-full h-64 object-cover" />
            <h3 className="text-xl font-semibold">Kitchen</h3>
          </div>
        </div>
      </div>
    </section>

    {/* New Arrivals */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">New Arrivals</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg shadow">
              <Image src="/placeholder.svg?height=200&width=200" alt={`Product ${item}`} width={200} height={200} className="w-full h-48 object-cover mb-4" />
              <h4 className="text-sm font-semibold mb-2">Product Name</h4>
              <p className="text-gray-600 text-sm mb-2">$99.00</p>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="text-gray-600 text-sm ml-2">(5.0)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <Truck className="h-12 w-12 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
            <p className="text-sm text-gray-600">Order above $200</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Headphones className="h-12 w-12 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Customer Support</h3>
            <p className="text-sm text-gray-600">24/7 customer support</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CreditCard className="h-12 w-12 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Money Guarantee</h3>
            <p className="text-sm text-gray-600">7 days money back</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <ShoppingCart className="h-12 w-12 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
            <p className="text-sm text-gray-600">Secure payment</p>
          </div>
        </div>
      </div>
    </section>

    {/* Newsletter */}
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-8">Sign up for deals, new products and promotions</p>
          <form className="flex">
            <Input
              type="email"
              placeholder="Email address"
              className="flex-grow mr-2"
            />
            <Button type="submit" className="bg-black text-white hover:bg-gray-800">
              Signup
            </Button>
          </form>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">3legant.</h3>
            <p className="text-gray-600 mb-4">Headphone Store</p>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link href="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Help</h4>
            <ul className="space-y-2">
              <li><Link href="/shipping" className="text-gray-600 hover:text-gray-900">Shipping</Link></li>
              <li><Link href="/returns" className="text-gray-600 hover:text-gray-900">Returns</Link></li>
              <li><Link href="/sizing" className="text-gray-600 hover:text-gray-900">Sizing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-600">123 Main St, Anytown, USA 12345</p>
            <p className="text-gray-600">contact@3legant.com</p>
            <p className="text-gray-600">+1 (234) 567-8901</p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 flex justify-between items-center">
          <p className="text-gray-600">&copy; 2023 3legant. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  </div>
  );
}
