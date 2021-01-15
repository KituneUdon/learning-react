import React, { FC, useState } from 'react';
import './App.css';

import AddTodo from './components/AddTodo';
import TodoElemment from './components/TodoElemment';

type Todo = {
  id: number;
  value: string;
};

const App: FC = () => {
  // 入力されたTodoを保持するstate
  const [todoList, setTodoList] = useState<Todo[]>([]);
  // 現在inputに入力されているTodoを保持するstate
  const [inputValue, setinputValue] = useState<Todo>({ id: 0, value: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = { id: todoList.length, value: e.target.value };
    setinputValue(newText);
  };

  const handleDelete = (deleteId: number) => {
    const newTodoList = todoList.filter((todo) => todo.id !== deleteId);
    setTodoList(newTodoList);
  };

  const add = () => {
    const newTodo = [...todoList, inputValue];
    setTodoList(newTodo);
    setinputValue({ id: 0, value: '' });
  };

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
