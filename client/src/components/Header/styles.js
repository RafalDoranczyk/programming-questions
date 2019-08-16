import styled, { keyframes } from "styled-components";

const move = keyframes`
from {
  transform: translateY(100%);
}
to{
  transform: translateY(0)
}
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: fixed;
  background-color: #15113f;
  color: #fff;
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
  padding: 20px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);

  & > p {
    animation: ${move} 0.5s;
  }
`;
