import {
  SET_TODO,
  ADD_TODO,
  DELETE_TODO,
  DELETE_ALL_TODO,
  EDIT_TODO,
  UPDATE_TODO,
  SAVE_TODO,
} from "./constains";

export const setTodo = (payload) => {
  return {
    type: SET_TODO,
    payload,
  };
};

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const deleteAllTodo = (payload) => {
  return {
    type: DELETE_ALL_TODO,
    payload,
  };
};

export const editTodo = (payload) => {
  return {
    type: EDIT_TODO,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

export const saveTodo = (payload) => {
  return {
    type: SAVE_TODO,
    payload,
  };
};
