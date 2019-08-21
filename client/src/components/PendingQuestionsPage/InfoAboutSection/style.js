import styled, { css } from "styled-components";
import { pageMove } from "views/style";

export const Wrapper = styled.div`
  animation: ${pageMove} 0.6s ease;
  margin: 10px auto 20px auto;
  max-width: 600px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const Heading = styled.h2`
  font-size: 14px;
  width: 95%;
  text-align: center;
`;

export const Text = styled.p(
  ({ center }) => css`
    font-size: 12px;
    font-weight: ${center && "700"};
    margin-top: 20px;
    line-height: 160%;
    letter-spacing: 1px;
    width: 85%;
    text-align: ${center ? "center" : "justify"};
  `
);
