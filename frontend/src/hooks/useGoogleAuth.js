import React from 'react'
import { useGoogleLogin } from 'react-use-googlelogin'

const GoogleAuthContext = React.createContext({ isSignedIn: false, isInitialized: true })

const GoogleAuthConsumer = ({ children }) => {
    const googleAuth = useGoogleLogin({
        clientId: process.env.REACT_APP_CLIENT_ID,
    })

    return (
        <GoogleAuthContext.Provider value={googleAuth}>
            {children}
        </GoogleAuthContext.Provider>
    )
}

export const GoogleAuthProvider = ({ children }) => {
    if (!process.env.REACT_APP_CLIENT_ID) {
        return (
            <GoogleAuthContext.Provider value={{ isSignedIn: false, isInitialized: true }}>
                {children}
            </GoogleAuthContext.Provider>
        )
    }
    return <GoogleAuthConsumer>{children}</GoogleAuthConsumer>
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext)
