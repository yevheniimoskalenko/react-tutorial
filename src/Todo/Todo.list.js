import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todo.item';
const styles = {
  ul: {
    listStyle: 'none',
  },
};
function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return <TodoItem todo={todo} key={index} index={index} />;
      })}
    </ul>
  );
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TodoList;
