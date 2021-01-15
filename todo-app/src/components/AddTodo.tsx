import React, { FC } from 'react';

type Todo = {
  id: number;
  value: string;
};

type Props = {
  todo: Todo;
  onChange: (evnet: React.ChangeEvent<HTMLInputElement>) => void;
  add: () => void;
};

const AddTodo: FC<Props> = ({ todo, onChange, add }) => {
  const isTodo = () => todo.value === '';

  return (
    <>
      <input value={todo.value} onChange={onChange} />
      <button type="button" onClick={add} disabled={isTodo()}>
        追加
      </button>
    </>
  );
};

export default AddTodo;
