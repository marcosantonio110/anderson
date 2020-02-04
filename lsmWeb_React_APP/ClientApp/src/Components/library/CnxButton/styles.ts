import styled from "styled-components";

interface Iprops {
  cnxBtnColor?: string;
  cnxTextColor?: string;
}

const setBgColor = (value: string): string => {
  switch (value) {
    case "primary":
      return "#007bff";
      break;
    case "success":
      return "#449d44";
      break;
    case "danger":
      return "#dc3545";
      break;
    case "warning":
      return "#ffc107";
      break;
    case "clear":
      return "#f0f0f0";
      break;

    default:
      return "";
      break;
  }
};

const setColor = (value: string): string => {
  switch (value) {
    case "text-primary":
      return "#007bff";
      break;
    case "text-success":
      return "#449d44";
      break;
    case "text-danger":
      return "#dc3545";
      break;
    case "text-warning":
      return "#ffc107";
      break;
    case "text-secondary":
      return "#6c757d";
      break;
    case "text-white":
      return "#FFF";
      break;
    case "text-dark":
      return "#343a40";
      break;

    default:
      return "";
      break;
  }
};

export const Button = styled.button<Iprops>`
  background: ${props =>
    props.cnxBtnColor ? setBgColor(props.cnxBtnColor) : ""};
  color: ${props => (props.cnxTextColor ? setColor(props.cnxTextColor) : "")};
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  user-select: none;
  display: flex;
  padding: 8px 12px;
  align-items: center;

  span {
    font-size: 14px;
  }

  svg {
    margin-right: 5px;
    width: 13px;
    height: 13px;
  }

  &:hover {
    /* background-color: #ccc2; */
  }
`;
