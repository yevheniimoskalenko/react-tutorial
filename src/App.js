import React from "react";
import TodoList from "./Todo/Todo.list";

const todos = [
  { id: 1, computed: false, title: "Купить хлеб" },
  { id: 2, computed: false, title: "Купить молоко" },
  { id: 3, computed: false, title: "Купить масло" },
];
function App() {
  return (
    <div className="wrapper">
      <h1>react tutorial</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
