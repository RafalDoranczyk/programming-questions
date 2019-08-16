import styled, { keyframes } from "styled-components";

const animationSpin = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

const Spinner = styled.div`
  border: 4px solid #15113f;
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: fixed;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
  z-index: 2;
  animation: ${animationSpin} 1.5s linear infinite;
`;

export default Spinner;
