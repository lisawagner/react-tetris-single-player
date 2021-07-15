import { useCallback, useState } from "react";

import { initTetromino, TETROMINOES } from "../tetrominoes";
import { STAGE_WIDTH } from "../helpers";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOES[0].shape,
    collider: false,
  });

  const updatePlayerPos = ({ x, y, collider }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collider,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: initTetromino().shape,
      collider: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer];
};
