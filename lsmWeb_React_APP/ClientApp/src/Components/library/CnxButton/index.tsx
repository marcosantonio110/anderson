import React from "react";

import { Button } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  cnxBtnColor?: string;
  cnxTextColor?: string;
}

export const CnxButton: React.FC<Props> = ({
  cnxBtnColor,
  children,
  cnxTextColor,
  ...shared
}) => {
  return (
    <Button cnxBtnColor={cnxBtnColor} cnxTextColor={cnxTextColor} {...shared}>
      {children}
    </Button>
  );
};

CnxButton.defaultProps = {
  type: "button"
};

export default CnxButton;
