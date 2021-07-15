import styled from "styled-components";
import bgImage from "../../img/stars-small.jpg";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) var(--darkGrey);
  background-size: cover;
  overflow: hidden;
`;

export const HUD = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
