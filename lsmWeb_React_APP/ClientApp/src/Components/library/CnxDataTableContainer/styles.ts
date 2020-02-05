import styled from "styled-components";

export const DataTableContainer = styled.div`
  min-height: 500px;
  min-height: 40vh;
  max-height: 70vh;
  overflow-y: auto;
  overflow-x: auto;

  .only-icon {
    background-color: #fff !important;
    border-color: #ccc !important;
    margin-right: 5px !important;

    &:hover {
      background-color: #e6e6e6 !important;
      border-color: #adadad !important;
    }

    svg {
      margin: 0px;
      width: 13px;
      height: 13px;
    }
  }
`;
