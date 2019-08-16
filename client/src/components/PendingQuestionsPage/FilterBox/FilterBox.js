import React from "react";
import { WrapperForAllButtons } from "../../TechnologyButton/styles";
import ButtonToChoose from "../../TechnologyButton/TechnologyButton";
const FilterBox = ({
  BUTTON_MODELS,
  pendingTechnologies,
  filterPendingQuestions,
  chosenTechnologyForFilter
}) => {
  const filterModels = BUTTON_MODELS.filter(btn =>
    pendingTechnologies.find(technology => btn.technology === technology)
  );

  const noFilterButton = {
    noFilter: true,
    technology: "Wszystkie"
  };

  filterModels.unshift(noFilterButton);

  const buttonsToRender = filterModels.map(button => (
    <ButtonToChoose
      onClick={() => filterPendingQuestions(button.technology)}
      isActive={button.technology === chosenTechnologyForFilter}
      color={button.color}
      icon={button.icon}
      technology={button.technology}
      key={button.technology}
    />
  ));

  return <WrapperForAllButtons>{buttonsToRender}</WrapperForAllButtons>;
};

export default FilterBox;
