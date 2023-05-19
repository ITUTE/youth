import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import store from 'data/store'
import './index.scss'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { GoogleAuthProvider } from './hooks/useGoogleAuth'
import MessengerChat from './components/MessengerChat'

ReactDOM.render(
    <React.StrictMode>
        <GoogleAuthProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                    <MessengerChat />
                </BrowserRouter>
            </Provider>
        </GoogleAuthProvider>
    </React.StrictMode>,
    document.getElementById('root'),
)
