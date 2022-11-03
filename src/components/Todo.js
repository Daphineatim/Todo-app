import PropTypes from 'prop-types';
import React from 'react';

const Todo = ({ todo }) => (
  <div>
    <input type="checkbox" />
    <li>{todo.task}</li>
    <button type="submit">X</button>
  </div>
);

Todo.propTypes = {
  todo: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default Todo;
