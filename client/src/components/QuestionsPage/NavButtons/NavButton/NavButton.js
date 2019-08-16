import React from "react";
import * as S from "./styles";

const NavButton = ({ isActive, color, text, fn }) => (
  <S.NavButton onClick={fn} color={color} isActive={isActive}>
    Pytanie {text}
  </S.NavButton>
);

export default NavButton;
