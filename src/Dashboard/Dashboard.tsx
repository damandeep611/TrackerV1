import { TodoList } from "../components/Todo/TodoList";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50 ">
      <Sidebar />
      <main className="flex-1   overflow-y-auto">
        <TodoList />
      </main>
    </div>
  );
}
