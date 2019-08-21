import styled from "styled-components";

export const MenuIconWrapper = styled.button`
  width: 25px;
  height: 25px;
  position: relative;
  background-color: transparent;
  margin-right: auto;
  @media (min-width: 800px) {
    display: none;
  }
`;

export const SingleBar = styled.span`
  position: absolute;
  height: 15%;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
  :nth-child(1) {
    top: ${({ isMenuOpened }) => (isMenuOpened ? "50%" : "0")};
    transform: ${({ isMenuOpened }) => isMenuOpened && "rotate(135deg)"};
  }
  :nth-child(2) {
    top: 50%;
    transform: ${({ isMenuOpened }) =>
      isMenuOpened ? "translateY(0)" : "translateY(-50%)"};
    opacity: ${({ isMenuOpened }) => isMenuOpened && "0"};
    left: ${({ isMenuOpened }) => isMenuOpened && "-40px"};
  }
  :nth-child(3) {
    top: ${({ isMenuOpened }) => (isMenuOpened ? "50%" : "100%")};
    transform: ${({ isMenuOpened }) =>
      isMenuOpened ? " rotate(-135deg) " : "translateY(-100%)"};
  }
`;
