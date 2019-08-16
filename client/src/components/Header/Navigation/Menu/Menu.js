import React from "react";
import * as S from "./styles";
import Item from "./Item/Item";
const Menu = ({ menuItems }) => {
  const items = menuItems.map((item, index) => (
    <Item
      key={index}
      onClick={item.onClick}
      name={item.name}
      icon={item.icon}
      anchor={item.anchor}
    />
  ));

  return <S.Menu>{items}</S.Menu>;
};

export default Menu;
