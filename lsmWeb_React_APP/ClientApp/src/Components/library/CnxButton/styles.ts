import styled from "styled-components";

interface Iprops {
  cnxBtnColor?: string;
  cnxTextColor?: string;
}

const setBgColor = (value: string): string => {
  switch (value) {
    case "primary":
      return "#007bff";
    case "success":
      return "#449d44";
    case "danger":
      return "#dc3545";
    case "warning":
      return "#ffc107";
    case "clear":
      return "#f0f0f0";
    case "clear-outline":
      return "#f0f0f0";
    default:
      return "";
  }
};

const setColor = (value: string): string => {
  switch (value) {
    case "text-primary":
      return "#007bff";
    case "text-success":
      return "#449d44";
    case "text-danger":
      return "#dc3545";
    case "text-warning":
      return "#ffc107";
    case "text-secondary":
      return "#6c757d";
    case "text-white":
      return "#FFF";
    case "text-dark":
      return "#343a40";
    default:
      return "";
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
