import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aku Laurila | Home',
  description: 'My homepage, porfolio and contact information',
  metadataBase: new URL("https://about.akulaurila.com")
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="navbar-padding" id="top"/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
