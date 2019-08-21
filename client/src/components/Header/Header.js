import React from "react";
import * as S from "./styles";
import * as routes from "routes/routes";
import MenuIcon from "./MenuIcon/MenuIcon";
import { withRouter } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

const Header = ({
  history: {
    location: { pathname }
  },
  color,
  isNavigationShowed
}) => {
  const length = routes.questions.length + 1;

  let path;

  switch (pathname) {
    case routes.home:
      path = "Strona główna";
      break;
    case routes.suggestQuestion:
      path = "Zaproponuj własne pytanie";
      break;
    case routes.pendingQuestions:
      path = "Pytania w kolejce";
      break;
    default:
      path = `${pathname.slice(length)} - pytania`;
  }

  return (
    <S.Header>
      <MenuIcon />
      <Navigation color={color} isNavigationShowed={isNavigationShowed} />
      <p>{path}</p>
    </S.Header>
  );
};

export default withRouter(Header);
