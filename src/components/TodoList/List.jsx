import React from 'react';
import { TodoListBlock } from './style';
import TodoItem from '../TodoItem/Item';
import { useTodoState } from '../../TodoContext';


function TodoList() {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
