import React from 'react'
import Footer from './footer'
import Header from './header'
// import Footer from './footer'

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
<<<<<<< HEAD
            {/* <Footer /> */}
=======
            <Footer />
>>>>>>> 2b1f4da9da1a29925e3aad6e64208beb92e08ead
        </div>
    )
}
