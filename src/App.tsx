import TodoList from "./TodoList"

function App() {

  return (
    <div className="bg-blue-300 min-h-screen">
      <div className="container mx-auto p-4 items-center justify-center">
        <h1 className="text-center text-3x1 font-blod mb-6">
          Daglig To Do List
        </h1>
        <div className="">
        <TodoList />
        </div>
      </div>
    </div>
  )
}

export default App
