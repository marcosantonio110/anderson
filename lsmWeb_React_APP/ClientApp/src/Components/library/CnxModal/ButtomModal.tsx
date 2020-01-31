import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const CnxButton: React.FC<Props> = ({ children, ...shared }) => {
  return <button {...shared}>{children}</button>;
};

CnxButton.defaultProps = {
  type: "button"
};

export default CnxButton;
