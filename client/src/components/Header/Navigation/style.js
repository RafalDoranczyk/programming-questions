import styled, { css } from "styled-components";

export const Navigation = styled.nav(
  ({ theme, isNavigationShowed, color }) => css`
    width: 100vw;
    height: 40vh;
    position: fixed;
    top: 40px;
    left: 0%;
    transition: 0.2s ease transform;
    z-index: 2;
    box-shadow: 0 0px 5px rgba(255, 255, 255, 0.88),
      0 1px 2px rgba(255, 255, 255, 0.2);
    background-color: #323232;
    transform: ${isNavigationShowed ? "translateY(0)" : "translateY(-50vh)"};
  `
);
