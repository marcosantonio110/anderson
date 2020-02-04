import React from "react";

import { ModalBody } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const CnxModalBody: React.FC<Props> = ({ children, ...shared }) => {
  return <ModalBody {...shared}>{children}</ModalBody>;
};

export default CnxModalBody;
