import * as actionTypes from './actions';

const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      return {
        persons: state.persons.concat({
          id: Math.random(), // not really unique but good enough here!
          name: "Max",
          age: Math.floor(Math.random() * 40),
        }),
      };
    case actionTypes.DELETE_PERSON:
      const updatedArray = state.persons.filter(result => result.id !== action.id);
      return {
        persons: updatedArray
      };
    default:
      return state;
  }
};

export default reducer;
