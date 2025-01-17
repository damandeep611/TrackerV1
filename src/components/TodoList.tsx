import React from "react";
import { Todo } from "../types/Todo.Types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id:string)=> void;
  deleteTodo: (id: string) => void;
  updateTodo: (id:string, text: string) => void
}

const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo, deleteTodo, updateTodo})=> {
  // if there are no todos display a message
  if(todos.length === 0){
    return(
      <div className="text-center py-4 text-gray-500">No Todos. yet add one above</div>
    )
  }
  return(
    <ul className="divide-y divide-gray-200">
      {todos.map((todo)=> (
        <TodoItem key={todo._id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
      ) 
      )}
    </ul>
  )
}

export default TodoList;