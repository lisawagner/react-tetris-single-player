import React from "react";
// Styles
import { StartBtn } from "./StartButton.styles";

const StartButton = ({ callback }) => (
  <StartBtn onClick={callback}>Play!</StartBtn>
);

export default StartButton;
