import React, { createContext } from "react";
import { Todo } from "../types/Todo.Types";

interface TodoContextType {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  setTodos: () => {},
});
