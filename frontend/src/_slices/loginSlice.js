import {createSlice} from '@reduxjs/toolkit';

export const loginReducer = createSlice({
    name: 'userLoginCheck',
    initialState: [

    ],
    reducers: {
        userLoginCheck: (state, action) => {
            state.push(action.payload);
        }
    }
});