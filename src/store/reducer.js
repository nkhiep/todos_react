import {
  SET_TODO,
  ADD_TODO,
  DELETE_TODO,
  DELETE_ALL_TODO,
  EDIT_TODO,
  UPDATE_TODO,
  SAVE_TODO,
} from "./constains";

import Storage from "./Storage";
const stores = Storage();

export const initState = {
  inputTodo: "",
  listTodo: stores.getItem(),
  editTodo: false,
  editIndex: "",
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        inputTodo: action.payload,
      };
    case ADD_TODO:
      stores.setItem([...state.listTodo, action.payload]);
      return {
        ...state,
        listTodo: [...state.listTodo, action.payload],
      };
    case DELETE_TODO:
      const newDeleteTodo = [...state.listTodo];
      newDeleteTodo.splice(action.payload, 1);
      stores.setItem(newDeleteTodo);
      return {
        ...state,
        listTodo: newDeleteTodo,
      };
    case DELETE_ALL_TODO:
      stores.setItem([]);
      return {
        ...state,
        inputTodo: "",
        listTodo: [...stores.getItem()],
        editTodo: false,
        editIndex: "",
      };
    case EDIT_TODO:
      return {
        ...state,
        inputTodo: action.payload.inputTodo,
        editTodo: action.payload.editing,
        editIndex: action.payload.index,
      };
    case UPDATE_TODO:
      return {
        ...state,
        inputTodo: action.payload,
      };
    case SAVE_TODO:
      const newSaveListTodo = [...state.listTodo];
      newSaveListTodo[action.payload.index] = action.payload.inputTodo;
      stores.setItem(newSaveListTodo);
      return {
        inputTodo: "",
        listTodo: newSaveListTodo,
        editTodo: action.payload.editing,
        editIndex: "",
      };
    default:
      throw new Error("Invalid Todo!");
  }
}

export default reducer;
