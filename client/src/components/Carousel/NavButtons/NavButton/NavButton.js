import React from "react";
import * as S from "./styles";
const NavButton = ({ color, index, onClick, isActive }) => {
  return (
    <S.NavButton
      isActive={isActive}
      onClick={onClick}
      color={color}
      key={index}
    >
      Pytanie {index + 1}
    </S.NavButton>
  );
};

export default NavButton;
