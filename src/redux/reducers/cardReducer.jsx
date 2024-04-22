import { types } from "../types";

const initialState = {
  title: 0,
};

export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case types.CLICK:
      return { ...state, title: state.title + 1 };
    default:
      return state;
  }
}
