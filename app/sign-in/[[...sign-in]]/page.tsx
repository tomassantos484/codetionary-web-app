import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function Page() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-page">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <SignIn />
            </div>
        </div>
    )
}
