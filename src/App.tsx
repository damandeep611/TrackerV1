import { TodoList } from "./components/TodoList";
import Sidebar from "./Dashboard/Sidebar";

function App() {
  return (
    <div className="flex h-screen bg-gray-50 ">
      <Sidebar />
      <main className="flex-1   overflow-y-auto">
        <TodoList />
      </main>
    </div>
  );
}

export default App;
