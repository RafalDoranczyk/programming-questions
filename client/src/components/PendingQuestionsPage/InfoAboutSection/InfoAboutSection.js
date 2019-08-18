import React from "react";
import * as S from "./style";

const InfoAboutSection = () => {
  return (
    <S.Wrapper>
      <S.Heading> Pytania oczekujące na dodanie do aplikacji</S.Heading>
      <S.Text>
        W tym miejscu znajdują się nadesłane przez użytkowników pytania oraz
        odpowiedzi. Możesz zagłosować na pytanie, jeżeli chesz, aby zostało
        dodane do aplikacji.
      </S.Text>
      <S.Text center>
        Kliknij w odpowiedni przycisk, aby wyfiltrować pytania.{" "}
      </S.Text>
    </S.Wrapper>
  );
};

export default InfoAboutSection;
