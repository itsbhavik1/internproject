import Image from 'next/image'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"


export default function SignUpPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 hidden lg:block relative">
        <div className="absolute top-8 left-8 text-2xl font-semibold text-gray-800">3legant.</div>
        <Image
          src="/placeholder.svg?height=1080&width=1080"
          alt="Elegant armchair"
          layout="fill"
          objectFit="cover"
          className="object-center"
        />
      </div>
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Sign up</h2>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/signin" className="font-medium text-green-600 hover:text-green-500">
                Sign in
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="space-y-4 rounded-md shadow-sm">
              <div>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <Checkbox id="agree-terms" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
              <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-900">
                I agree with{' '}
                <Link href="#" className="font-medium text-green-600 hover:text-green-500">
                  Privacy Policy
                </Link>
                {' '}and{' '}
                <Link href="#" className="font-medium text-green-600 hover:text-green-500">
                  Terms of Use
                </Link>
              </label>
            </div>

            <div>
              <Button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}