import styled, { css } from "styled-components";

export const Wrapper = styled.div(
  ({ theme, color, width }) => css`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    box-shadow: 0 3px 1px ${color}, 0 1px 5px #222;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;
    &:hover {
      box-shadow: 0 14px 20px ${color}, 0 10px 10px ${color};
    }
    &::after {
      width: 0;
      height: 0;
      top: 0;
      left: 0;
      border-top: 130px solid ${color};
      border-right: ${width} solid transparent;
      opacity: 0.3;
    }

    /* FOR QUESTION NUMBER  */
    &:hover > div {
    }
  `
);

export const TechnologyName = styled.p(
  ({ color }) => css`
    margin-bottom: 5px;
    font-size: 13px;

    letter-spacing: 2px;
  `
);
