const initialState = {
  tables: [
      {
          id: '1',
          status: 'Busy',
          people: '2',
          maxPeople: '4',
          bill: '0'
      },
      {
          id: '2',
          status: 'Empty',
          people: '2',
          maxPeople: '4',
          bill: '0'
      },
      {
          id: '3',
          status: 'Cleaning',
          people: '2',
          maxPeople: '4',
          bill: '0'
      },
      {
          id: '4',
          status: 'Empty',
          people: '2',
          maxPeople: '4',
          bill: '0'
      },
      {
          id: '4',
          status: 'Busy',
          people: '2',
          maxPeople: '4',
          bill: '0'
      },
  ],
  states: ['Empty', 'Busy', 'Cleaning'],
};

export default initialState;