import styled from "styled-components";

interface Props {
  isOpenModal: boolean;
}

export const Modal = styled.div<Props>`
  transition: all 0.8s ease-in-out;
  position: absolute;
  top: 0;
  right: ${props => (props.isOpenModal ? "0px" : "-50%")};
  overflow: auto;
  height: 99%;
  background-color: #fbfbfb;
  z-index: 999;
  padding: 0 0 1em 0;
  width: 50%;
  opacity: 1;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  box-shadow: 0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132),
    0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108);
  margin: 0.2% 0;

  #modalLateral .row {
    cursor: default;
    margin: 0;
  }

  #modalLateral .row button {
    padding: 5px;
  }

  #modalLateral label {
    padding-left: 0;
  }

  #modalLateral iframe {
    width: 100%;
    height: 95%;
  }

  .content-form-itens {
    display: flex;
    flex-wrap: wrap;
  }

  .contains_modal input {
    padding: 6px 12px;
    height: 34px;
    font-size: 11px;
    margin-bottom: 9px;
  }

  .contains_modal .item {
    width: 33%;
    padding: 2.5px 10px;
  }

  .btnsAction {
    margin: 10px;
  }

  .btnsAction button {
    margin-right: 10px;
  }

  footer {
    margin: 10px;
  }
`;
