import styled, { keyframes } from "styled-components";

import { pageMove } from "views/style";

export const Wrapper = styled.div`
  animation: ${pageMove} 0.5s ease;
  display: grid;
  margin: 30px 6px;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, 130px);
  justify-content: space-around;
  grid-auto-rows: 130px;
`;
