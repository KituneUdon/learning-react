import React, { useState } from 'react';

type Todo = {
  id: number;
  value: string;
};

// Missing return type on function  @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line
const useTodo = () => {
  // 入力されたTodoを保持するstate
  const [todoList, setTodoList] = useState<Todo[]>([]);
  // 現在inputに入力されているTodoを保持するstate
  const [inputValue, setInputValue] = useState<Todo>({ id: 0, value: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = { id: todoList.length, value: e.target.value };
    setInputValue(newText);
  };

  const handleDelete = (deleteId: number) => {
    const newTodoList = todoList.filter((todo) => todo.id !== deleteId);
    setTodoList(newTodoList);
  };

  const add = () => {
    const newTodo = [...todoList, inputValue];
    setTodoList(newTodo);
    setInputValue({ id: 0, value: '' });
  };

  const returnValue: [
    todoList: Todo[],
    inputValue: Todo,
    handleDelete: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleDelete: (deleteId: number) => void,
    add: () => void,
  ] = [todoList, inputValue, handleChange, handleDelete, add];

  return returnValue;
};

export default useTodo;
