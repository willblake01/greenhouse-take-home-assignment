// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background-image: url(
      https://careers.unity.com/_next/image?url=%2Fhero%2Fhero.jpg&w=3840&q=75
    );
    background-repeat: no-repeat;
    background-size: cover;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;

export default GlobalStyle;
