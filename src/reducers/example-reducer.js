import {EXAMPLE_ACTION} from "../actions/types";

const initialState = {
  example: "",
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
  case EXAMPLE_ACTION:
    return Object.assign({}, state, {example: action.text});
  default:
    return state;
  }
};

export default exampleReducer;
