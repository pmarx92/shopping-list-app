import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
 box-sizing: border-box;
 font-family: 'Inter', sans-serif;
 padding: 0;
 margin: 0;
}
:root {
    --backgroundColor: #353540;
    --textColor: #D7D7D9;
    --bodyColor: #666A73;
}
body {
 font-family: sans-serif;
 margin: 0;
 
}
`;

export default GlobalStyle;