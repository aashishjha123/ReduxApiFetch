import {configureStore} from '@reduxjs/toolkit'
import PostReducer from './Features/PostSlice'

export default configureStore({
    reducer:{
        post:PostReducer,
        // key:value (above line)
    },
});