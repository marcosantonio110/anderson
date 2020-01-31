import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  padding: 0px 10px;

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
