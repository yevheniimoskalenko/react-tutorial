import React, { useEffect } from 'react';
import TodoList from './Todo/Todo.list';
import Context from './context';
import Loader from './Loader';

const AddTodo = React.lazy(() => import('./Todo/addTodo'));
function App() {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 1000);
      });
  });
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
        {loading && <Loader />}
        <React.Suspense fallback="loading...">
          <AddTodo onCreate={addTodo} />
        </React.Suspense>
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>No todos</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
