import React from "react";

import { DataTableContainer } from "./styles";

const CnxDataTableContainer: React.FC = ({ children, ...shared }) => {
  return <DataTableContainer {...shared}>{children}</DataTableContainer>;
};

export default CnxDataTableContainer;
