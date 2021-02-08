import React, { FC } from 'react';
import './App.css';

import AddTodo from './components/AddTodo';
import TodoElemment from './components/TodoElemment';

import useTodo from './hooks/use-todo';

const App: FC = () => {
  const [todoList, inputValue, handleChange, handleDelete, add] = useTodo();

  return (
    <>
      <AddTodo todo={inputValue} onChange={(e) => handleChange(e)} add={add} />
      {todoList.map((t) => (
        <TodoElemment
          key={t.id}
          value={t.value}
          onDelete={() => handleDelete(t.id)}
        />
      ))}
    </>
  );
};

export default App;
