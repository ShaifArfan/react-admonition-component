import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins/400.css"

const GlobalStyles = createGlobalStyle`
 *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
 }
 .container{
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
 }
 html{
   font-size: 10px;
 }
 body{
  font-family: 'Poppins', sans-serif;
 }
`;

export default GlobalStyles;