import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  rows: number;
  cols: number;
  setGameOver: Dispatch<SetStateAction<boolean>>;
};

function Tetris({ rows, cols, setGameOver }: Props) {
  return <div className="relative">Tetris</div>;
}

export default Tetris;
