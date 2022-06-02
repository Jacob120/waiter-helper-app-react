


export const fetchData = () => {
    return (dispatch) => {
        fetch('http://localhost:3131/api/tables')
        .then(res => res.json())
        .then(tables => dispatch(updateTables(tables)))
    }
};

// selectors
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const EDIT_TABLE = createActionName(`EDIT_TABLE`);
const UPDATE_TABLES = createActionName(`UPDATE_TABLES`); 


// action creators
export const editTable = payload => ({ type: EDIT_TABLE, payload })
export const updateTables = payload => ({ type: UPDATE_TABLES, payload })

const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
        case EDIT_TABLE:
            return statePart.map(table => (table.id === action.payload.id ? { ...table, ...action.payload } : table));
        case UPDATE_TABLES:
            return [...action.payload];
        default:
            return statePart; 
    };
};

export default tablesReducer;