import React from "react";

import { ButtonIcon } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
}

const CnxButton: React.FC<Props> = ({ icon, children, ...shared }) => {
  return (
    <ButtonIcon {...shared}>
      <i className={"fa fa-" + icon}></i>
    </ButtonIcon>
  );
};

export default CnxButton;
