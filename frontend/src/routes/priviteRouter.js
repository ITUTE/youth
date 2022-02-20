import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useGoogleAuth } from '../hooks/useGoogleAuth'

const PriviteRouter = ({ element }) => {
    const [isLoading, setIsLoading] = useState(true)
    console.log(useGoogleAuth())
    const { isSignedIn, isInitialized } = useGoogleAuth()

    useEffect(() => {
        setIsLoading(!isInitialized)
    }, [isInitialized])

    return isLoading ? (
        <h1>Loading </h1>
    ) : isSignedIn ? (
        element
    ) : (
        <Navigate to="/login" />
    )
}

export default PriviteRouter
