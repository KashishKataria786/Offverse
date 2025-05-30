import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <main className='min-h-screen'>
        {children}
    </main>
    <Footer/>
    </>
  )
}

export default Layout