import React from "react";
import * as S from "./styles";
import { Icon } from "@iconify/react";
const TechnologyButton = ({ color, icon }) => {
  return (
    <S.Button color={color}>
      <Icon icon={icon} />
    </S.Button>
  );
};

export default TechnologyButton;
