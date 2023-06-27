'use client'

import '../styles/global.css'
import { Navbar } from 'ui/Navbar/v1'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='relative flex items-start dark:bg-black text-gray-700 dark:text-gray-200'>
        <div>
          <Navbar />

          {children}
        </div>
      </body>
    </html>
  )
}
