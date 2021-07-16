import React from "react";
import { Wrapper } from "./Stage.styles";

import Cell from "../Cell/Cell";

const Stage = ({ stage }) => (
  <Wrapper width={stage[0].length} height={stage.length}>
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </Wrapper>
);

export default Stage;
