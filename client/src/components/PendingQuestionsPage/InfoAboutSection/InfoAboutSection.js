import React from "react";
import * as S from "./style";

const InfoAboutSection = () => {
  return (
    <S.Wrapper>
      <S.Heading> Pytania oczekujące na dodanie do aplikacji</S.Heading>
      <S.Text>
        W tym miejscu znajdziesz pytania od użytkowników. Możesz
        dodać odpowiedź do pytania oraz zagłosować, jeżeli chcesz, aby pytanie
        zostało dodane do aplikacji.
      </S.Text>
      <S.Text> Kliknij w odpowiedni przycisk, aby wyfiltrować pytania. </S.Text>
    </S.Wrapper>
  );
};

export default InfoAboutSection;
