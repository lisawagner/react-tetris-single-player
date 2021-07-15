import React from "react";
import { StyledCell } from "./Cell.styles";
import { TETROMINOES } from "../../tetrominoes";

const Cell = ({ type }) => {
  return <StyledCell type={type} color={TETROMINOES[type].color} />;
};

export default Cell;
