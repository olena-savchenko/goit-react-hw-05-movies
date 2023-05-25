import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 20px;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
  Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

button {
  display: block;
  font-family: inherit;
  cursor: pointer;
}

ul,
ol {
  margin: 0;
  padding: 0;
}

img {
    display: block;
    max-width: 100%;
    /* width: 100%;
    object-fit: cover; */
    height: auto;
}

ul {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
}

li {
 width: calc((100% - 45px) / 4);
 transition: transform  250ms cubic-bezier(0.4, 0, 0.2, 1);
 border-bottom: 4px;
 
} 
li:hover {
  cursor: zoom-in;
  transform: scale(1.03);
}
`;


