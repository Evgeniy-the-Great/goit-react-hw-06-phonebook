import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { contactsReducer } from "./contacts/contactsReducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
