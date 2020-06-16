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
        return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle} />;
      })}
    </ul>
  );
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number,
  onToggle: PropTypes.func.isRequired,
};
export default TodoList;
