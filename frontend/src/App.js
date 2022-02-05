import React, { useState } from 'react'
import { Routes, useRoutes } from 'react-router-dom'
import routes from './routes'

function App() {
    return (
        <>
            <Routes>{routes}</Routes>
        </>
    )
}

export default App
