export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// create initial stage with empty cells
export const initialStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
