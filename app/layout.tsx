import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './component/navbar/Navbar'
import RegisterModal from './component/modals/RegisterModal'
import { Toaster } from 'react-hot-toast'
import LoginModal from './component/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './component/modals/RentModal'



export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font =  Nunito({
  subsets : ["latin"]
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en">

      
      <body className={font.className}>
        <Toaster/>
        <RentModal/>
        <RegisterModal />
        <LoginModal/>
        <Navbar currentUser={currentUser} />
        {children}
        </body>
    </html>
  )
}
