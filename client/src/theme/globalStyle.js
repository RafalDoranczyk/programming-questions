import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
*::after, *::before{
  content: '';
  position: absolute;
}

input,
textarea,
button,
select,
a {
  outline: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

 button{
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
}
  ::-webkit-scrollbar {
    background-color: #fff;
    height: 2px;
    width: 3px;

  }
  ::-webkit-scrollbar-thumb{
      background-color: #15113f;
      width: 5px;
  }
`;

export default GlobalStyle;
