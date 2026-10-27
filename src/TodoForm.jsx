
import { useReducer, useState } from "react";

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];

    case "DELETE_TODO":
      return state.filter(
        (todo) => todo.id !== action.payload
      );

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case "CLEAR_ALL":
      return [];

    default:
      return state;
  }
}
