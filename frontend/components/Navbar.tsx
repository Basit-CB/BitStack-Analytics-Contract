'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              BitStacks Analytics
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/stake" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Stake
              </Link>
              <Link href="/governance" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Governance
              </Link>
              <Link href="/analytics" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Analytics
              </Link>
              <button className="btn-primary">
                Connect Wallet
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 p-2"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-black/40 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/stake" className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
              Stake
            </Link>
            <Link href="/governance" className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
              Governance
            </Link>
            <Link href="/analytics" className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
              Analytics
            </Link>
            <button className="btn-primary w-full mt-4">
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
