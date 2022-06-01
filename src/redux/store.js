import { configureStore } from '@reduxjs/toolkit'
import tablesReducer from "./tablesReducer";


export default configureStore({
    reducer: {
        tablesReducer: tablesReducer,
    }
})