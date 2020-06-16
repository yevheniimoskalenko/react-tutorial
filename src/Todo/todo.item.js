import React from 'react';
import PropTypes from 'prop-types';
function TodoItem({ todo, index, onChange }) {
  console.log(todo);
  const styles = {
    li: {
      display: 'flex',
      justifyContent: 'space-between',
      alingItems: 'center',
      padding: '.5rem 1rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '.5rem',
    },
    input: {
      marginRight: '1rem',
    },
  };
  return (
    <li style={styles.li}>
      <span>
        <input type="checkbox" style={styles.input} onChange={() => onChange(todo.id)} />
        <strong>{index + 1}</strong>
        {todo.title}
      </span>
      <button>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
