import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo } from './redux/todoActions';
import TodoItem from './TodoItem';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state);
  
  const [inputValue, setInputValue] = useState(''); 

  const addTodoHandler = (text) => {
    dispatch(addTodo(text));
    setInputValue(''); 
  };

  const toggleTodoHandler = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodoHandler}
          />
        ))}
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => addTodoHandler(inputValue)}>Добавить дело</button>
      </div>
    </div>
  );
};

export default TodoList;
