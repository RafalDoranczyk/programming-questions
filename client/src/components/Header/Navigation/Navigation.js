import React from "react";
import * as S from "./style";
import Menu from "./Menu/Menu";
import * as routes from "routes/routes";
import { connect } from "react-redux";
import actions from "store";
const Navigation = ({
  isNavigationShowed,
  color,
  menuItemHandler,
  
}) => {
  const menuItems = [
    {
      name: "Strona główna",
      icon: "fas fa-home",
      anchor: `${routes.home}`
    },
    {
      name: "Zaproponuj pytanie",
      icon: "fas fa-envelope-open-text",
      anchor: `${routes.suggestQuestion}`
    },
    {
      name: "Pytania oczekujące na dodanie",
      icon: "fas fa-clipboard-list",
      anchor: `${routes.pendingQuestions}`
    },
    {
      name: "Panel admina",
      icon: "fas fa-user-shield",
      anchor: `${routes.admin}`
    }
  ];

  menuItems.forEach(item => (item.onClick = () => menuItemHandler()));

  return (
    <S.Navigation
      menuItemscolor={color}
      isNavigationShowed={isNavigationShowed}
    >
      <Menu menuItems={menuItems} />
    </S.Navigation>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  menuItemHandler: () => dispatch(actions.menuItemHandler())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
