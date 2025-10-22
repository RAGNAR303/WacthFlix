import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
}

button , a{
    cursor: pointer;
}

body {
    background-color: #000b17e4;
    backdrop-filter: blur(10px);
    font-family: "Barlow", sans-serif;
    font-weight: 400;
    color: #d5d5d5ff;
   
}

h1 ,h2 {
   font-family: "Barlow", sans-serif;
   font-weight: 900;
  letter-spacing: 2px;
}





`;
