import { createSlice } from '@reduxjs/toolkit';
import initialState from "./initialState";

export const fetchData = dispatch => {
    fetch('https//localhost:3131/api/tables')
    .then(res => res.json())
    .then(tables => dispatch(setTables(tables)))
}



const tablesSlice = createSlice({
    name: 'tables',
    initialState: 
      {fetchData},
    reducers: {
        setTables: (state, action) => {
            return {...state, tables: [...action.payload] };
        },
        newTable: (state, action) => {
            return { ...state, tables: [action.payload, ...state.tables] };
        },
        editTable: (state, action) => {
            return state.map(table => (table.id === action.payload.id ? { ...table, ...action.payload } : table));
        },
        removeTable: (state, action) => {
            return state.filter(table => table.id !== action.payload);
        }
    }
});

export const { setTables, newTable, editTable, removeTable } = tablesSlice.actions
export default tablesSlice.reducer