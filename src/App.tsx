import { TodoList } from "./components/TodoList";

function App() {
  return (
    <section className="min-h-screen bg-gray-700 py-8">
      <div className="container mx-auto px-4">
        <TodoList />
      </div>
    </section>
  );
}

export default App;
