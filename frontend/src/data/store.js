import { configureStore } from '@reduxjs/toolkit'
import { authSlice, userSlice } from './slices'

const store = configureStore({
    reducer: { auth: authSlice },
})

export default store
