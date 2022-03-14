import { configureStore } from '@reduxjs/toolkit'
import {loginReducer} from '_slices/loginSlice'


const store = configureStore({
    reducer: {
        loginUserCheck: loginReducer.reducer,
    },
});
export default store;