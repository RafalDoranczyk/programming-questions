import React from "react";
import * as S from "./styles";

const BottomButton = ({ icon, fn, type, isDisabled }) => (
  <S.Button disabled={isDisabled} onClick={fn} type={type} className={icon} />
);

export default BottomButton;
