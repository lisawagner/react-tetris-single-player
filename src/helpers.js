export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// create initial stage with empty cells
export const initialStage = () =>
  Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, "clear"]));

// add collision detection
export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  // return player.tetromino.some((row, y) =>
  //   row.some((cell, x) => {
  //     if (cell !== 0) {
  //       return (
  //         !stage[y + player.pos.y + moveY] ||
  //         !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
  //         stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
  //           "clear"
  //       );
  //     }
  //     return false;
  //   })
  // );

  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. Check for Tetromino
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. Check that movement is within game area height
          // and doesn't fall through the bottom of the play area
          !stage[y + player.pos.y + moveY] ||
          // 3. Check that movement is inside game area width
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Check if cell is not clear else return clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
