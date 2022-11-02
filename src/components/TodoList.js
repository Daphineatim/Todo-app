import PropTypes from 'prop-types';
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => (
  <div>
    <ul>
      {todos.map((el) => <Todo key={el.id} todo={el} />)}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.objectOf(
    PropTypes.string,
  )).isRequired,
};

export default TodoList;
