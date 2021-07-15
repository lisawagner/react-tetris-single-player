import { useState } from "react";
import { initTetromino } from "../tetrominoes";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: initTetromino().shape,
    collider: false,
  });

  return [player];
};
