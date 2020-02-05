import styled from "styled-components";

export const HeaderSearch = styled.div`
  display: flex;
  border-bottom: solid 2px #e7e7e7;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 10px 0px;
`;

export const HeaderSearchContainerItem = styled.div`
  width: 120px;
  margin-right: 10px;

  input {
    ::placeholder {
      color: #0006;
      font-size: 10px;
    }
  }
`;

export const LabelSearchContainerItem = styled.label`
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
`;
