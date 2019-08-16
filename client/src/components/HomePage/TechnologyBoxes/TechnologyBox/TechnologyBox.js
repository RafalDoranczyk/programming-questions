import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import TechnologyHeading from "./TechnologyHeading/Heading";
import TechnologyButton from "./TechnologyButton/TechnologyButton";

const TechnologyBox = ({
  technology,
  icon,
  color,
  onClick,
  questionsNumber
}) => {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(boxRef.current.offsetWidth);
    return window.addEventListener("resize", () => {
      if (boxRef.current) {
        return setWidth(boxRef.current.offsetWidth);
      }
    });
  }, []);

  return (
    <S.Wrapper
      width={`${width}px`}
      ref={boxRef}
      onClick={questionsNumber ? onClick : null}
      color={color}
    >
      <TechnologyHeading color={color} questionsNumber={questionsNumber} />
      <TechnologyButton color={color} icon={icon} />
      <S.TechnologyName>{technology}</S.TechnologyName>
    </S.Wrapper>
  );
};

export default TechnologyBox;
