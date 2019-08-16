import React from "react";
import TechnologyBox from "./TechnologyBox/TechnologyBox";
import * as S from "./styles";
const TechnologyBoxes = ({ createdTechnologyButtons, onClick }) => {
  const createdTechnologyBoxes = createdTechnologyButtons.map(
    ({ technology, icon, color, questionsNumber }) => (
      <TechnologyBox
        key={technology}
        onClick={() => onClick(technology)}
        technology={technology}
        questionsNumber={questionsNumber}
        icon={icon}
        color={color}
      />
    )
  );
  return <S.Wrapper>{createdTechnologyBoxes}</S.Wrapper>;
};

export default TechnologyBoxes;
