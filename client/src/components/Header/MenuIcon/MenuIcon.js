import React from "react";
import * as S from "./styles";
import { connect } from "react-redux";
import actions from "store";

const MenuIcon = ({ isMenuShowed, navigationHandler }) => {
  const onClick = () => {
    navigationHandler();
  };

  const bars = (
    <>
      <S.SingleBar isMenuOpened={isMenuShowed} />
      <S.SingleBar isMenuOpened={isMenuShowed} />
      <S.SingleBar isMenuOpened={isMenuShowed} />
    </>
  );

  return <S.MenuIconWrapper onClick={onClick}>{bars}</S.MenuIconWrapper>;
};

const mapStateToProps = ({ isMenuShowed }) => ({
  isMenuShowed
});

const mapDispatchToProps = dispatch => ({
  navigationHandler: () => dispatch(actions.navigationHandler())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuIcon);
