import React, { useState } from "react";
import { initialStage } from "../../helpers";
//Styles
import { Wrapper, HUD } from "./Tetris.styles";
// Custom Hooks
import { usePlayer } from "../../hooks/usePlayer";
import { useStage } from "../../hooks/useStage";
// Components
import Stage from "../Stage/Stage";
import Display from "../Display/Display";
import StartButton from "../StartButton/StartButton";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log("re-render");

  const movePlayer = (dir) => {
    updatePlayerPos({ x: dir, y: 0 });
  };

  const startGame = () => {
    // reset game
    setStage(initialStage());
    resetPlayer();
  };

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collider: false });
  };

  const dropPlayer = () => {
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37 || keyCode === 65) {
        movePlayer(-1);
      } else if (keyCode === 39 || keyCode === 68) {
        movePlayer(1);
      } else if (keyCode === 40 || keyCode === 83) {
        dropPlayer(-1);
      }
    }
  };

  return (
    <Wrapper role="button" tabIndex="0" onKeyDown={(e) => move(e)}>
      <HUD>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </HUD>
    </Wrapper>
  );
};

export default Tetris;
