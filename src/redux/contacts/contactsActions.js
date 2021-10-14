import { v4 as uuidv4 } from "uuid";
import { ADD, GET, DELETE, FILTER } from "../contacts/contactsType";

export const addContact = (contact) => ({
  type: ADD,
  payload: { id: uuidv4(), ...contact },
});

export const getContacts = (contacts) => ({
  type: GET,
  payload: contacts,
});

export const deleteContact = (id) => ({
  type: DELETE,
  payload: id,
});

export const filterContact = (value) => ({
  type: FILTER,
  payload: value,
});
