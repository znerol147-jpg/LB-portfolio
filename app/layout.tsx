import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Lorenz Cloud G. Balacuit | Portfolio',
  description: 'Creative and Professional Portfolios',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans antialiased">
        
        {/* Floating Glassmorphism Navigation */}
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
          <nav className="pointer-events-auto flex items-center gap-6 px-6 py-3 bg-white/60 backdrop-blur-lg border border-white/40 shadow-lg rounded-full">
            <Link href="/" className="font-black text-xl tracking-tight text-gray-900 mr-2 sm:mr-6 hover:scale-105 transition-transform">
              LB.
            </Link>
            <div className="flex items-center gap-4 sm:gap-6 text-sm font-bold">
              <Link href="/professional" className="text-gray-600 hover:text-blue-600 transition-colors">
                Professional
              </Link>
              <Link href="/creative" className="text-gray-600 hover:text-purple-600 transition-colors">
                Creative
              </Link>
            </div>
          </nav>
        </div>

        {/* 
          Main Content Area 
          Removed the restrictive max-width so your Creative page can go full-screen.
          Added pt-24 so content doesn't get hidden behind the fixed navbar.
        */}
        <main className="pt-24 min-h-screen">
          {children}
        </main>

      </body>
    </html>
  )
}