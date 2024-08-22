import { SignUp } from '@clerk/nextjs'
import React from 'react'
import Image from 'next/image'

export default function Page() {
    return (
        <div className="min-h-screen flex flex-col bg-page">
            <header className="p-2 flex justify-between items-center fixed top-0 left-0 right-0 bg-page z-10 shadow-md">
                {/* Add header content if needed */}
            </header>
            <main className="flex-grow flex items-center justify-center">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                    <div className="flex flex-col items-center mb-6">
                        <Image src="/codetionarylogo.jpg" alt="Codetionary" width={200} height={33} className="mb-4" />
                    </div>
                    <SignUp />
                </div>
            </main>
            <footer className="py-4 px-4 text-center bg-page">
                <p className="text-sm text-gray-500">© {new Date().getFullYear()} Codetionary. All rights reserved.</p>
            </footer>
        </div>
    )
}