import styled, { css } from "styled-components";

export const Navigation = styled.nav(
  ({ theme, isNavigationShowed, color }) => css`
    @media (max-width: 800px) {
      width: 100%;
      position: absolute;
      top: 45px;
      left: 0;
      height: 40vh;
      transition: 0.2s ease opacity;
      box-shadow: 0 0px 5px rgba(255, 255, 255, 0.88),
        0 1px 2px rgba(255, 255, 255, 0.2);
      background-color: #323232;
      transition: 0.2s ease opacity;
      opacity: ${isNavigationShowed ? "1" : "0"};
      transform: ${isNavigationShowed ? "translateX(0)" : "translateX(-100%)"};
    }
    @media (min-width: 800px) {
      width: 90%;
      max-width: 1000px;
      height: 45px;
    }
  `
);
