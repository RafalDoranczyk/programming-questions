import styled, { keyframes } from "styled-components";

const pageMove = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1
}
`;
export const Wrapper = styled.div`
  animation: ${pageMove} 0.5s ease;
  max-width: 500px;
  display: grid;
  margin: 30px auto;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, 130px);
  justify-content: space-around;
  grid-auto-rows: 150px;
`;
