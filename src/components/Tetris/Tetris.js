import React from "react";
import { initialStage } from "../../helpers";
//Styles
import { Wrapper, HUD } from "./Tetris.styles";
// Components
import Stage from "../Stage/Stage";
import Display from "../Display/Display";
import StartButton from "../StartButton/StartButton";

const Tetris = () => {
  return (
    <Wrapper>
      <HUD>
        <Stage stage={initialStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </HUD>
    </Wrapper>
  );
};

export default Tetris;
