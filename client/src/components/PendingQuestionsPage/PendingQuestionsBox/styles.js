import styled from "styled-components";

export const PendingQuestionsBox = styled.div`
  display: grid;
  grid-auto-rows: 140px;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 15px;
  /* background-color: red; */
  height: 100%;
  width: 90%;
  margin: 40px auto;
  transition: 0.3s;
`;
