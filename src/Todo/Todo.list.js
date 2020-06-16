import React from "react";
import TodoItem from "./todo.item";
const styles = {
  ul: {
    listStyle: "none",
  },
};
export default function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return <TodoItem todo={todo} index={index} key={todo.id} />;
      })}
    </ul>
  );
}
