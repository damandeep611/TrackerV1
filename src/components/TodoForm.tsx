import React, { useState } from "react";

interface TodoFormProps {
  addTodo: (text: string) => void
}

const TodoForm: React.FC<TodoFormProps> = ({addTodo})=> {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent)=> {
    e.preventDefault()
    if(text.trim()){
      addTodo(text.trim())
      setText('')
    }
  }
  return(
    <form onSubmit={handleSubmit} className="p-4 border-b border-gray-200">
      <div className="flex items-center">
        <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Add a new todo" className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-transparent" />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Add</button>
      </div>
    </form>
  )
}

export default TodoForm