import styled from "styled-components";

interface Props {
  isOpenModal: boolean;
}

export const Modal = styled.div<Props>`
  transition: all 0.8s ease-in-out;
  position: absolute;
  top: 0;
  right: ${props => (props.isOpenModal ? "0px" : "-50%")};
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
  overflow: hidden;

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

export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title-header {
    padding: 0 20px;
  }

  .buttons-actions {
    button {
      padding: 5px;
      background: none;
      border: none;
      font-size: 20px;
      color: #c9c9c9;

      &:hover {
        color: #7e7e7e;
      }

      svg {
        width: 17px;
        height: 17px;
      }
    }

    .icon-close {
      margin-right: 15px;
    }
  }
`;

export const ModalBody = styled.div`
  padding: 10px;

  .cnx-row {
    display: flex;
    margin-bottom: 15px;
  }

  .cnx-input-container {
    padding: 0 10px;
    width: 100%;

    input {
      &::placeholder {
        font-size: 10px;
      }
    }
  }

  button {
    margin: 5px 10px 0 10px;
  }
`;

export const ModalFooter = styled.div`
  padding: 0 20px;

  ul {
    list-style: none;
    padding: 9px 0;
    margin: 0 0 10px 0;
    display: flex;
    font-size: 12px;
    border-bottom: 1px solid #ddd;

    li {
      .selected {
        border-radius: 4px;
        border: 1px solid #ddd;
        border-bottom-color: transparent;
        background: #fff;
        color: #555;
      }

      &:hover {
        cursor: pointer;
      }

      a {
        text-decoration: none;
        padding: 10px 15px;
      }
    }
  }
`;
