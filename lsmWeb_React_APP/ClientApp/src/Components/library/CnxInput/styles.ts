import styled from 'styled-components';

export const Input = styled.input`
  color: #212121;
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 4px;
  background-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.02) 0%,
    rgba(255, 255, 255, 0.02) 50%
  );
  background-image: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0.02) 0%,
    rgba(255, 255, 255, 0.02) 50%
  );
  background-image: linear-gradient(
    top,
    rgba(0, 0, 0, 0.02) 0%,
    rgba(255, 255, 255, 0.02) 50%
  );

  ::placeholder {
    /* color: #e0e7ee; */
    color:#0006
  }

  &:hover {
    border: 1px solid #7b7b7b !important;
  }

  &:focus {
    border: 1px solid #5f8dff !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;
  }
  transition: all .2s ease-in;
`;
