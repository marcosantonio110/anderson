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

.header_search{
  display:flex;
    border-bottom: solid 2px #e7e7e7;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    padding: 10px 0px;

}

.header_search_container_item{
  width:120px;
  margin-right:10px
}

.header_search_container_item input{
  padding:6px 12px;
  height:34px;
  font-size:11px;
  margin-bottom: 9px
}

.container_dataTabless{
  min-height:500px;
  min-height:40vh;
  /* max-height:800px; */
  max-height:70vh;
  overflow-y:auto;
  overflow-x:auto;
}

.mr-2{
  margin-right:5px
}

.d-none {
  display: none;
}
`;
