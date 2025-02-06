import React, { useState } from "react";
import { Todo } from "../../types/Todo.Types";

interface TodoFormProps {
  addTodo: (title: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      _id: "507f1f77bcf86cd799439011", // Simulated MongoDB ObjectId
      tag: "Research",
      title: "Research Featured Order",
      description:
        "An order feature is needed for users when making purchases.",
      date: new Date("2024-02-12"),
      duration: "4h",
      progress: 15,
    },
  ]);
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.title.trim()) return;
    const todo: Todo = {
      _id: Date.now().toString(),
      ...newTodo,
      date: new Date(),
      duration: "0m",
      progress: 0,
    };
    addTodo(newTodo.title);
    setTodos([...todos, todo]);
    setNewTodo({ title: "", description: "", tag: "" });
  };
  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div className="space-y-4">
          <input
            type="text"
            value={newTodo.title}
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
            placeholder="Add a new todo"
            className="w-full  py-2 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <details className="bg-gray-50 p-4 rounded-lg">
            <summary className="cursor-pointer text-sm text-gray-600 font-medium">
              Optional deta
            </summary>
            <div className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Tag(optional)"
                value={newTodo.tag}
                onChange={(e) =>
                  setNewTodo({ ...newTodo, tag: e.target.value })
                }
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Description(optional)"
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
          className="w-full py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
