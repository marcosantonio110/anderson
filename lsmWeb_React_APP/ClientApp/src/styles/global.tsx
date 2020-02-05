import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-size:11px
}

body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  font-family: 'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;
  overflow-x:hidden;
  overflow-y:hidden;
  padding:10px
}

body,
input,
button {
  font-family: Roboto, sans-serif;
}

.d-none {
  display: none;
}

/*
 ! TypeHead Styles
*/
  .rbt-token {
    background-color: #5f8dff;
    color: #fff;
  }

  .rbt-loader {
    -webkit-animation: loader-animation 600ms infinite linear;
    -o-animation: loader-animation 600ms infinite linear;
    animation: loader-animation 600ms infinite linear;
    border: 1px solid #d5d5d5;
    border-radius: 50%;
    border-top-color: #5f8dff;
    display: block;
    height: 16px;
    width: 16px;
  }

  .rbt-token-active {
    background-color: #5f8dff;
    color: #fff;
    outline: none;
    text-decoration: none;
  }
`;
