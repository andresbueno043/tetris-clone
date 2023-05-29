import defaultCell from '@/utils/Cell';

type Props = {
  rows: number;
  cols: number;
};

const buildBoard = ({ rows, cols }: Props) => {
  const builtRows = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({ ...defaultCell }))
  );

  return {
    rows: builtRows,
    size: { rows, cols },
  };
};

export default buildBoard;
