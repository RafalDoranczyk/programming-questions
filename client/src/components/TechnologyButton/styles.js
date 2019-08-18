import styled, { css } from "styled-components";

export const WrapperForAllButtons = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-auto-rows: 35px;
  gap: 15px;
  padding: 15px;

  background-color: #fff;
`;

export const ButtonToChoose = styled.button(
  ({ color, isActive }) => css`
    /* THIS BUTTON NEEDS GRID PARENT */
    display: flex;
    justify-content: space-around;
    transform: ${isActive && "scale(1.1)"};
    transition: 0.3s ease transform;
    border-radius: 10px;
    background-color: transparent;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    letter-spacing: 1px;
    overflow: hidden;
    position: relative;
    font-size: 12px;
    &:focus {
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.24);
    }
    &::after {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: 0.3s ease;
      transform: ${isActive
        ? "translateX(0) scale(1) "
        : "translateX(-100%) scale(0)"};
      border-radius: 10px;
      background-color: ${color};
      opacity: 0.3;
      z-index: -1;
    }
  `
);
export const Icon = styled.span(
  ({ color, isActive }) => css`
    transition: 0.3s ease;
    transform: ${isActive
      ? "translateX(5px) rotate(360deg) scale(1.4)"
      : "translateX(0) rotate(0) scale(1) "};

    color: ${color};
    font-size: 12px;
  `
);
