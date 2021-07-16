import { useState, useEffect, useCallback } from "react";

export const useStatus = (clearRows) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const linePoints = [40, 100, 300, 1200];

  const calcScore = useCallback(() => {
    if (clearRows > 0) {
      // Based on how the original Tetris score was calculated
      setScore((prev) => prev + linePoints[clearRows - 1] * (level + 1));
      setRows((prev) => prev + clearRows);
    }
  }, [level, linePoints, clearRows]);

  useEffect(() => {
    calcScore();
  }, [calcScore, clearRows, score]);

  return [score, setScore, rows, setRows, level, setLevel];
};
