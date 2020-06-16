import React from 'react';
import TodoList from './Todo/Todo.list';

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, computed: false, title: 'Купить хлеб' },
    { id: 2, computed: false, title: 'Купить молоко' },
    { id: 3, computed: false, title: 'Купить масло' },
  ]);
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.computed = !todo.computed;
        }
        return todo;
      }),
    );
  }
  return (
    <div className="wrapper">
      <h1>react tutorial</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
