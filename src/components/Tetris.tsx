import React, { Dispatch, SetStateAction } from 'react';
import Board from './Board';
import useBoard from '@/hooks/useBoard';

type Props = {
  rows: number;
  cols: number;
  setGameOver: Dispatch<SetStateAction<boolean>>;
};

function Tetris({ rows, cols, setGameOver }: Props) {
  const [board] = useBoard({ rows, cols });

  return <Board board={board} />;
}

export default Tetris;
