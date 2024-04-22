import { types } from "./types";

export function handleClick() {
  return {
    type: types.CLICK,
  };
}

function getUsers(users) {
  return {
    type: types.GET,
    payload: users,
  };
}

export function fetchAsyncRequest() {
  return async function (dispatch) {
    const fetchRequest = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await fetchRequest.json();
    dispatch(getUsers(data));
  };
}
