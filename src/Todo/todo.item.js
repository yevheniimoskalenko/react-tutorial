import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import context from '../context';
const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem',
  },
  input: {
    marginRight: '1rem',
  },
};
function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(context);

  const classes = [];

  if (todo.computed) {
    classes.push('done');
  }
  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          type="checkbox"
          style={styles.input}
          checked={todo.computed}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        {todo.title}
      </span>
      <button onClick={removeTodo.bind(null, todo.id)}>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
