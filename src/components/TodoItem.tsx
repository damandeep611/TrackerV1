import React, { useState } from "react";
import { Todo } from "../types/Todo.Types";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string)=> void;
  updateTodo: (id: string, text: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({todo, toggleTodo, deleteTodo, updateTodo})=> {
  // for editing mode and edited text
  const [isEditing, setIsEditing] = useState(false);
  const[editedText, setEditedText] = useState(todo.text)

  //handle the edited submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(editedText.trim()){
      updateTodo(todo._id, editedText.trim());
      setIsEditing(false)
    }
  }

  const handleCancel = ()=> {
    setEditedText(todo.text);
    setIsEditing(false)
  }
  return(
    <li className="flex items-center justify-between py-3 px-4 hover:bg-gray-50">
     {!isEditing ? (
      //display mode 
      <>
      <div className="flex items-center flex-grow">
      <input type="checkbox" checked={todo.completed} onChange={()=> toggleTodo(todo._id)}  className="h-4 w-4 text-blue-400 focus:ring-blue-500 border-gray-300 rounded"/>
      <span className={`ml-3 ${todo.completed ? 'line-through text-gray-400 ' : 'text-gray-700'}`}>{todo.text}</span>
      </div>
      <div className="flex gap-2">
      <button onClick={()=> setIsEditing(true)} className="text-blue-500 hover:text-blue-700 px-2">Edit</button>
      <button onClick={()=> deleteTodo(todo._id)}>Delete</button>
      </div>
      </>
     ): (
      // edit mode
      <form onSubmit={handleSubmit} className="flex items-center w-full gap-2">
        <input type="text" value={editedText} onChange={(e)=> setEditedText(e.target.value)} className="flex-grow px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500" autoFocus/>
        <button type="submit" className="text-green-500 hover:text-green-700 px-2">Save</button>
        <button type="button" onClick={handleCancel} className="text-gray-500 hover:text-gray-700 px-2">Cancel</button>
      </form>
     )}
    </li>
  )
}

export default TodoItem