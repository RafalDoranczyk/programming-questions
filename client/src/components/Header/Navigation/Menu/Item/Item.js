import React from "react";
import * as S from "./style";

const Item = ({ icon, name, anchor, onClick }) => {
  return (
    <S.Item onClick={onClick}>
      <S.Icon className={icon} />
      <S.StyledLink to={anchor}>{name}</S.StyledLink>
    </S.Item>
  );
};

export default Item;
