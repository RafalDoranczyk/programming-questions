import React from "react";
import { WrapperForAllButtons } from "../../TechnologyButton/styles";
import ButtonToChoose from "../../TechnologyButton/TechnologyButton";
import * as C from "../../../constants";

const ButtonsToChoose = ({ technology, onClick }) => {
  const technologyButtons = C.BUTTON_MODELS.map(btn => (
    <ButtonToChoose
      isActive={technology === btn.technology ? true : false}
      key={btn.technology}
      technology={btn.technology}
      icon={btn.icon}
      color={btn.color}
      onClick={e => onClick(e, "button", btn.technology)}
    />
  ));

  return <WrapperForAllButtons>{technologyButtons}</WrapperForAllButtons>;
};

export default ButtonsToChoose;
