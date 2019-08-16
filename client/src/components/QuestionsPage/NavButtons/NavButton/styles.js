import styled, { css } from "styled-components";

export const NavButton = styled.button(
  ({ theme, isActive, color }) => css`
    margin: 5px;
    flex-basis: 60px;
    height: 70%;
    font-size: 10px;
    flex-shrink: 0;
    box-shadow: ${isActive && "0 0 5px 0 rgba(0, 0, 0, .5)"};
    background-color: ${isActive ? theme[color] : "transparent"};
    &:hover {
      background-color: ${theme[color]};
    }
  `
);
