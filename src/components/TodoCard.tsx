import React, { useState } from "react";
import { Todo } from "../types/Todo.Types";
import { Pencil, Trash } from "lucide-react";
import { dateFormat } from "../utils/dateFormat";

interface TodoCardProps {
  todo: Todo;
  onUpdateDuration: (_id: string, minutes: number) => void;
  onEditTodo: (_id: string, updatedTodo: Partial<Todo>) => void;
  onDeleteTodo: (_id: string) => void;
}

const TodoCard: React.FC<TodoCardProps> = ({
  todo,
  onUpdateDuration,
  onEditTodo,
  onDeleteTodo,
}) => {
  // for editing mode and edited text
  const [timeSpent, setTimeSpent] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  //handle the edited submit
  const handleTimeUpdate = (minutes: number) => {
    const newTime = timeSpent + minutes;
    setTimeSpent(newTime);
    onUpdateDuration(todo._id, newTime);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    onEditTodo(todo._id, editedTodo);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDeleteTodo(todo._id);
  };

  if (isEditing) {
    return (
      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <div className="space-y-3">
          <input
            type="text"
            value={editedTodo.title}
            onChange={(e) =>
              setEditedTodo({ ...editedTodo, title: e.target.value })
            }
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Todo title (required)"
          />
          <details className="bg-gray-50 p-4 rounded-lg">
            <summary className="cursor-pointer text-sm text-gray-600">
              Optional Details
            </summary>
            <div className="mt-4 space-y-4">
              <input
                type="text"
                value={editedTodo.tag}
                onChange={(e) =>
                  setEditedTodo({ ...editedTodo, tag: e.target.value })
                }
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tag (optional)"
              />
              <textarea
                value={editedTodo.description}
                onChange={(e) =>
                  setEditedTodo({ ...editedTodo, description: e.target.value })
                }
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Description (optional)"
              />
            </div>
          </details>
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-4  m-2 shadow-sm hover:shadow-md transition-shadow">
      <div className="space-y-3">
        <div className="flex justify-between items-start">
          {todo.tag && (
            <span className="px-2 py-1 text-sm bg-gray-100 rounded-md text-gray-600">
              {todo.tag}
            </span>
          )}
          <div className="flex space-x-2">
            <button
              onClick={handleEdit}
              className="p-1 text-gray-500 hover:text-blue-500 transition-colors"
              aria-label="Edit task"
            >
              <Pencil size={16} />
            </button>
            <button
              onClick={handleDelete}
              className="p-1 text-gray-500 hover:text-red-500 transition-colors "
              aria-label="Delete task"
            >
              <Trash size={16} />
            </button>
          </div>
        </div>
        <h3>{todo.title}</h3>
        {todo.description && <p>{todo.description}</p>}
        <div className="flex items-center text-sm text-gray-500 space-x-2">
          <span>{dateFormat(todo.date)}</span>
          <span>.</span>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path d="M12 6v6l4 2" strokeWidth="2" />
            </svg>
            {todo.duration}
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5">
              {[...Array(5)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleTimeUpdate(30)}
                  disabled={timeSpent >= (index + 1) * 30}
                  className={`w-6 h-6 rounded-full border-2 transition-colors ${
                    timeSpent >= (index + 1) * 30
                      ? "bg-blue-500 border-blue-500 "
                      : "border-gray-300 hover:border-blue-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {timeSpent >= 60
                ? `${Math.floor(timeSpent / 60)}h ${timeSpent % 60}m`
                : `${timeSpent}m`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
