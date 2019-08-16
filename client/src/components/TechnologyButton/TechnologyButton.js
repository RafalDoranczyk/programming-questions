import { Icon } from "@iconify/react";
import React from "react";
import * as S from "./styles";
const ButtonToChoose = ({ technology, color, icon, onClick, isActive }) => {
  return (
    <S.ButtonToChoose isActive={isActive} onClick={onClick} color={color}>
      <S.Icon isActive={isActive} color={color}>
        <Icon icon={icon} />
      </S.Icon>
      {technology}
    </S.ButtonToChoose>
  );
};

export default ButtonToChoose;
