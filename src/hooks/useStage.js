import { useState, useEffect } from "react";
import { initialStage } from "../helpers";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(initialStage());
  const [clearRows, setClearRows] = useState(0);

  useEffect(() => {
    setClearRows(0);

    const sweepRows = (newStage) =>
      newStage.reduce((ack, row) => {
        if (row.findIndex((cell) => cell[0] === 0) === -1) {
          setClearRows((prev) => prev + 1);
          ack.unshift(new Array(newStage[0].length).fill([0, "clear"]));
          return ack;
        }
        ack.push(row);
        return ack;
      }, []);

    const updateStage = (prevStage) => {
      // Clear the stage
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      // Draw the Tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collider ? "merged" : "clear"}`,
            ];
          }
        });
      });

      // Check for Collisions and Points
      if (player.collider) {
        resetPlayer();
        return sweepRows(newStage);
      }
      return newStage;
    };

    // Add updates to stage
    setStage((prev) => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage, clearRows];
};
