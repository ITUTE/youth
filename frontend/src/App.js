import Layout from 'containers/layout'
import React from 'react'
import { Routes } from 'react-router-dom'
import routes from './routes'

function App() {
    return (
        <Layout>
            <Routes>{routes}</Routes>
        </Layout>
    )
}

export default App
