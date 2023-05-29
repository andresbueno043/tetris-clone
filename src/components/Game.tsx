import Menu from '@/components/Menu';
import useGameOver from '@/hooks/useGameOver';
import Tetris from '@/components/Tetris';

type Props = {
  rows: number;
  cols: number;
};

function Game({ rows, cols }: Props) {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const start = () => resetGameOver();

  return (
    <div>
      {gameOver ? (
        <Menu onClick={start} />
      ) : (
        <Tetris rows={rows} cols={cols} setGameOver={setGameOver} />
      )}
    </div>
  );
}

export default Game;
