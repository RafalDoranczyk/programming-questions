import React, { useEffect, useRef } from "react";
import * as S from "./style";
import NavButton from "./NavButton/NavButton";

const NavButtons = ({ allSlides, color, slideIndex, onClick }) => {
  const elementRef = useRef(null);
  useEffect(() => {
    const elementWidth = 60; // 60 is one box size
    const currentScroll = elementWidth * slideIndex;
    elementRef.current.scrollLeft = currentScroll - elementWidth / 0.7;
  });

  const buttons = allSlides.map((item, index) => (
    <NavButton
      isActive={slideIndex === index}
      onClick={() => onClick(index)}
      color={color}
      key={index}
      index={index}
    />
  ));

  return (
    <S.NavButtons ref={elementRef} color={color}>
      {buttons}
    </S.NavButtons>
  );
};

export default NavButtons;
