import Layout from 'containers/layout'
import React, { useEffect } from 'react'
import { Routes } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import routes from './routes'

function App() {
    useEffect(() => {
        AOS.init({ duration: 650, once: true, easing: 'ease-out-cubic' })
    }, [])

    return (
        <Layout>
            <Routes>{routes}</Routes>
        </Layout>
    )
}

export default App
