import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
