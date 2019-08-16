import styled from "styled-components";
import { pageMove } from "views/style";

export const Wrapper = styled.div`
  height: 70vh;
  animation: ${pageMove} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  /* background-color: red; */
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
  height: 200px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  align-items: center;
`;

export const Label = styled.label`
  letter-spacing: 1px;
`;

export const TextArea = styled.textarea`
  width: 280px;
  height: 50px;
  padding: 5px;
  border-radius: 5px;
`;

export const Input = styled.input`
  padding: 5px;
  width: 140px;
  border-radius: 5px;
  height: 25px;
  text-align: center;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: #88f;
  border-radius: 5px;
  color: #fff;
`;
