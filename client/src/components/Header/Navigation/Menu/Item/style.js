import styled from "styled-components";
import { Link } from "react-router-dom";
export const Item = styled.li`
  flex-basis: 25%;
  display: flex;
  padding: 10px;
  /* justify-content: space-between; */
  border-bottom: 1px solid #555;
  /* background-color: green; */
`;

export const Icon = styled.i`
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const StyledLink = styled(Link)`
  display: block;
  margin-left: 10px;
  height: 100%;
  color: #fff;
  width: 100%;
  text-decoration: none;
  display: flex;
  align-items: center;
`;
