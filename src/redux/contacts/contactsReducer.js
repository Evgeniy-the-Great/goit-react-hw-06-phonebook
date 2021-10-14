import { combineReducers } from "redux";
import { ADD, GET, DELETE, FILTER } from "../contacts/contactsType";

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];

    case GET:
      return payload;

    case DELETE:
      return state.filter((contact) => contact.id !== payload);
    default:
      return state;
  }
};
const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;

    default:
      return state;
  }
};

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
