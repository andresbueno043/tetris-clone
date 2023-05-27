import React from 'react';
import Menu from '@/components/Menu';

type Props = {
  rows: number;
  cols: number;
};

function Game({ rows, cols }: Props) {
  const start = () => {
    console.log('Start');
  };

  return (
    <div>
      <Menu onClick={start} />
    </div>
  );
}

export default Game;
