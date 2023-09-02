// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Open-Sans, Helvetica, Sans-Serif;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  .align-items-center {
    align-items: center;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .flex-wrap-wrap {
    flex-wrap: wrap;
  }
  .heigt-100 {
    height: 100%;
  }
  .justify-content-center {
    justify-content: center;
  }
  .justify-content-left {
    justify-content: left;
  }
  .width-100 {
    width: 100%;
  }
`;

export default GlobalStyle;
