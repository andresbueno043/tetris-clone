import { useState } from 'react';
import buildBoard from '@/utils/Board';

type Props = {
  rows: number;
  cols: number;
};

const useBoard = ({ rows, cols }: Props) => {
  const [board] = useState(buildBoard({ rows, cols }));

  return [board];
};

export default useBoard;
