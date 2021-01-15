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

const AddTodo: FC<Props> = ({ todo, onChange, add }) => (
  <>
    <input value={todo.value} onChange={onChange} />
    <button type="button" onClick={add}>
      追加
    </button>
  </>
);

export default AddTodo;
