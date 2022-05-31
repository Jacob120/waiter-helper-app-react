import { createSlice } from '@reduxjs/toolkit'
import initialState from "./initialState";

const tablesSlice = createSlice({
    name: 'tables',
    initialState: initialState.tables,
    reducers: {

    }
})

export const { todoAdded, todoToggled } = tablesSlice.actions
export default tablesSlice.reducer