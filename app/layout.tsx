import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codetionary",
  description: "Unlock your full stack potential!",
};

function Header() {
  return (
    <header className="flex items-center justify-between py-2 px-4 h-12">
      {/* Logo */}
      <div>
        {/* Your logo component or image */}
      </div>
      
      {/* Join Waitlist button */}
      <a 
        href="https://tally.so/r/m6R4RB" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-sm py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Join Waitlist
      </a>
    </header>
  );
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="bg-[#F2F2F2]">
        <body className={inter.className}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}