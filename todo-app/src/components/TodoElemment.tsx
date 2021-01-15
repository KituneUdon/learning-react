import React, { FC, MouseEvent } from 'react';

type Props = {
  value: string;
  onDelete: (
    event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => void;
};

const TodoElemment: FC<Props> = ({ value, onDelete }) => (
  <li>
    {value}
    <button type="button" onClick={onDelete}>
      完了
    </button>
  </li>
);

export default TodoElemment;
