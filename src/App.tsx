import { useEffect, useState } from "react"
import { Todo } from "./types/Todo.Types"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import API_BASE_URL from "./config/api";


function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [error, setError] = useState<string>("")


  useEffect(()=> {
    fetchTodos()
  },[])

  const fetchTodos = async ()=> {
    try{
      const response = await fetch(`${API_BASE_URL}/todos`);
      if(!response.ok) throw new Error("Failed to fetch todo")
      const data = await response.json();
      setTodos(data)
    }catch(error){
      console.error('Error fetching todos:', error);
      setError("failed to load todos, please try again later")
      console.error("Error fetching todos:", error);
      
      
    }
  }
// add a new todo
  const addTodo = async (text: string)=> {
   try{
    const response = await fetch(`${API_BASE_URL}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text})
    })
    if(!response.ok) throw new Error("Failed to add todo")
    const newTodo = await response.json();
    setTodos([newTodo, ...todos])
   }catch(error){
    setError("Failed to add todo, please try again")
    console.error('Error adding todo:', error);
    
   }
  }

  // todo completed status 

  const toggleTodo = async (id: string)=> {

    try{
      const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
        method: 'PATCH',
      })

      if(!response.ok) throw new Error("Failed to toggle todo")
      const updatedTodo = await response.json()
      setTodos(
        todos.map((todo)=> (todo._id === id ? updatedTodo : todo)        )
      )
    }catch(error){
      setError("Failed to update todo. Please try again")
      console.error('Error toggling todo:', error)
    }
    
  }

  // update todo text 
  const updateTodo = async(id: string, text: string)=> {
    try{
      const response = await fetch(`${API_BASE_URL}/todos/${id}/text`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({text}),
      })

      if(!response.ok) throw new Error("failed to update todo")
      const updatedTodo = await response.json();
      setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)))
    } catch(error){
      setError("failed to update todo. Pleae try again")
      console.error("Error updating todo:", error);
      
    }
  }
  const deleteTodo = async (id: string)=> {
    try{
      const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
        method: 'DELETE'
      })
      if(!response.ok) throw new Error("Failed to delete todo")
      setTodos(todos.filter((todo)=> todo._id !== id))
    }catch(error){
      setError("Failed to delete todo. Please try again hehehe")
      console.error('Error deleting todo:', error);
      
    }
    
  }

  return (
    <section className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Modern Todo App</h1>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        </div>
      </div>
    </section>
  )
}

export default App
