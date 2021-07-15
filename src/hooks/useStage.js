import { useState } from "react";
import { initialStage } from "../helpers";

export const useStage = () => {
  const [stage, setStage] = useState(initialStage());

  return [stage, setStage];
};
