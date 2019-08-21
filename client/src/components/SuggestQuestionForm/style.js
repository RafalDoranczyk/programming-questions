import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  height: 70vh;
  max-width: 500px;
  margin: 10px auto 0 auto;
  font-size: 12px;
  p {
    margin-bottom: 20px;
    text-align: center;
    letter-spacing: 1px;
  }
  & *:focus {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);
  }
`;

export const MessageToUser = styled.p`
  text-align: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 10px;
  height: 30px;
  font-size: 10px;
  letter-spacing: 2px;
  font-style: italic;
`;
export const Form = styled.form`
  background-color: #fff;
  margin-top: 20px;
  height: 260px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  align-items: center;
`;

const sharedStyle = css`
  background-color: rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  border-style: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
  transition: background-color 0.2s ease 0s;
  padding: 5px;
  &:focus {
    background-color: #ffffff;
    outline-width: 0;
  }
`;

export const TextArea = styled.textarea`
  ${sharedStyle}
  width: 90vw;
  max-width: 450px;
  height: 70px;
`;

export const Input = styled.input`
  ${sharedStyle}
  width: 180px;
  height: 35px;
  text-align: center;
`;
export const Label = styled.label`
  letter-spacing: 1px;
`;
export const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: #88f;
  border-radius: 5px;
  color: #fff;
  transition: 0.3s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);
  &:hover {
    box-shadow: 0 6px 9px rgba(0, 0, 0, 0.12), 0 6px 9px rgba(0, 0, 0, 0.24);
  }
`;
