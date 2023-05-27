import React from 'react';
import Menu from '@/components/Menu';
import useGameOver from '@/hooks/useGameOver';

type Props = {
  rows: number;
  cols: number;
};

function Game({ rows, cols }: Props) {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const start = () => {
    resetGameOver();
    console.log(`${rows} ${cols} ${gameOver}`);
  };

  return (
    <div>
      <Menu onClick={start} />
    </div>
  );
}

export default Game;
