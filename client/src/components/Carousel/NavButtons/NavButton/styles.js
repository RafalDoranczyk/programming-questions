import styled, { css } from "styled-components";

export const NavButton = styled.button(
  ({ theme, isActive, color }) => css`
    width: 60px;
    height: 80%;
    box-shadow: ${isActive && "0 0 5px 0 rgba(0, 0, 0, .5)"};
    font-size: 10px;
    flex-shrink: 0;

    background-color: ${isActive ? theme[color] : "transparent"};
  `
);
