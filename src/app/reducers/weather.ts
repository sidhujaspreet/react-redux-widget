const initialState = {
  city: 'pune',
  data: {}
};

let weather = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      };
    default:
      return state
  }
};

export default weather;