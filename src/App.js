import React from 'react';
import TodoList from './Todo/Todo.list';
import Context from './context';
import AddTodo from './Todo/addTodo';
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
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function addTodo(title) {
    setTodos(todos.concat([{ title, id: Date.now, computed: false }]));
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>react tutorial</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>No todos</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
