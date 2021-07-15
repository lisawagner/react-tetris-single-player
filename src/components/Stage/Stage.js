import React from "react";
// Styles
import { Wrapper } from "./Stage.styles";
// Components
import Cell from "../Cell/Cell";

const Stage = ({ stage }) => (
  <Wrapper width={stage[0].length} height={stage.length}>
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </Wrapper>
);

export default Stage;
