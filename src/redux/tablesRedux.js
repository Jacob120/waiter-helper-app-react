import shortid from 'shortid';

// selectors
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const EDIT_TABLE = createActionName('EDIT_TABLE');
const UPDATE_TABLES = createActionName('UPDATE_TABLES'); 
const ADD_TABLE = createActionName('ADD_TABLE');

// action creators
export const editTable = payload => ({ type: EDIT_TABLE, payload });
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const addTable = payload => ({ type: ADD_TABLE, payload });

export const fetchData = () => {
    return (dispatch) => {
        fetch('http://localhost:3131/api/tables')
          .then(res => res.json())
          .then(tables => dispatch(updateTables(tables)))
    }
};

export const updateTableRequest = (updatedTable) => {
    return (dispatch) => {
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTable),
      };
  
      fetch('http://localhost:3131/api/tables/' + updatedTable.id, options)
       .then(() => dispatch(editTable(updatedTable)))
    }
  };

  export const addTableRequest = (newTable) => {
    return (dispatch) => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTable)
      };

      fetch('http://localhost:3131/api/tables')
        .then(() => dispatch(addTable(newTable)))

    }
  };
  

const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
        case EDIT_TABLE:
            return statePart.map(table => (table.id === action.payload.id ? { ...table, ...action.payload } : table));
        case UPDATE_TABLES:
            return [...action.payload];
        case ADD_TABLE:
          return [ ...statePart, { ...action.payload, id: shortid() }]
        default:
            return statePart; 
    };
};

export default tablesReducer;