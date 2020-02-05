import React from "react";
import { LabelSearchContainerItem, HeaderSearchContainerItem } from "./styles";

interface IProps {
  label: string;
}

const CnxLabelSearchContainerItem: React.FC<IProps> = ({ label, children }) => {
  return (
    <HeaderSearchContainerItem>
      <LabelSearchContainerItem>{label}</LabelSearchContainerItem>
      {children}
    </HeaderSearchContainerItem>
  );
};

export default CnxLabelSearchContainerItem;
