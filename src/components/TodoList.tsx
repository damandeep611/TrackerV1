import React, { useEffect, useState } from "react";
import { Todo } from "../types/Todo.Types";
import TodoCard from "./TodoCard";
import axios from "axios";
import API_BASE_URL from "../config/api";

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_BASE_URL}/todos`);
      const todosWithDates = response.data.map((todo: Todo) => ({
        ...todo,
        date: new Date(todo.date),
      }));
      setTodos(todosWithDates);
    } catch (err) {
      console.error("Error fetching todos:", err);
      setError("Failed to load todos. Please try again later");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.title.trim()) return;

    try {
      setError(null);
      const todoData = {
        ...newTodo,
        date: new Date(),
        duration: "0m",
        progress: 0,
      };
      const response = await axios.post(`${API_BASE_URL}/todos`, todoData);
      //addding the new todo to the existing list
      setTodos((prevTodos) => [
        ...prevTodos,
        { ...response.data, date: new Date(response.data.date) },
      ]);
      setNewTodo({ title: "", description: "", tag: "" });
    } catch (err) {
      console.error("Error creating todo:", err);
      setError("Failed to create todo. Please try again");
    }
  };
  const handleUpdateDuration = async (_id: string, minutes: number) => {
    try {
      setError(null);
      const duration =
        minutes >= 60
          ? `${Math.floor(minutes / 60)}h ${minutes % 60}m`
          : `${minutes}m`;
      await axios.put(`${API_BASE_URL}/todos/${_id}`, { duration });
      //update the local state without fetching again
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === _id ? { ...todo, duration } : todo
        )
      );
    } catch (err) {
      console.error("Error updating duration:", err);
      setError("Failed to update task duration. Please try again");
    }
  };

  const handleEditTodo = async (_id: string, updatedTodo: Partial<Todo>) => {
    try {
      setError(null);
      const response = await axios.put(
        `${API_BASE_URL}/todos/${_id}`,
        updatedTodo
      );
      //update teh local state without fetching again
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === _id
            ? { ...todo, ...response.data, date: new Date(response.data.date) }
            : todo
        )
      );
    } catch (err) {
      console.error("Error editing todo:", err);
      setError("Failed to edit todo. Please try again");
    }
  };
  const handleDeleteTodo = async (_id: string) => {
    try {
      await axios.delete(`${API_BASE_URL}/todos/${_id}`);
      //update the local state withoout fetching again
      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== _id));
    } catch (err) {
      console.error("Error deleting todo:", err);
      setError("Failed to delete todo, Please try again");
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-6">
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div className="space-y-4">
          <input
            type="text"
            value={newTodo.title}
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
            placeholder="Enter todo title (required)"
            className="w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <details className="bg-gray-50 p-4 rounded-lg">
            <summary className="cursor-pointer text-sm text-gray-600 font-medium">
              Optional details
            </summary>
            <div className="mt-4 space-y-4">
              <input
                type="text"
                value={newTodo.tag}
                onChange={(e) =>
                  setNewTodo({ ...newTodo, tag: e.target.value })
                }
                placeholder="Tag (optional)"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Description (optional)"
                value={newTodo.description}
                onChange={(e) =>
                  setNewTodo({ ...newTodo, description: e.target.value })
                }
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </details>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add Todo
        </button>
      </form>
      {loading ? (
        <div className="text-center py-4">Loading Todos...</div>
      ) : (
        <div className="space-y-4">
          {todos.length === 0 ? (
            <div className="text-center py-4 text-gray-500">
              No todos yet. Create one
            </div>
          ) : (
            <div className="">
              {todos.map((todo) => (
                <TodoCard
                  key={todo._id}
                  todo={todo}
                  onUpdateDuration={handleUpdateDuration}
                  onEditTodo={handleEditTodo}
                  onDeleteTodo={handleDeleteTodo}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
