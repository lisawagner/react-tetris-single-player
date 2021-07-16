import React from "react";
// Styles
import { Wrapper } from "./Display.styles";

const Display = ({ gameOver, text }) => (
  <Wrapper gameOver={gameOver}>{text}</Wrapper>
);

export default Display;
