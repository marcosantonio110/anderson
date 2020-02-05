import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";

import CnxButtonIcon from "~/Components/library/CnxIcon";
import CnxLabelSearchContainerItem from "./LabelSearchContainerItem";

import { HeaderSearch, HeaderSearchContainerItem } from "./styles";

interface IProps {
  funcSearch(): void;
}

const CnxHeader: React.FC<IProps> = ({ funcSearch, children }) => {
  return (
    <HeaderSearch>
      {children}

      <div style={{ fontSize: "16px", paddingTop: "19px" }}>
        <CnxButtonIcon
          className="btn btn-default actionBtn"
          icon="search"
          onClick={funcSearch}
        />
      </div>
    </HeaderSearch>
  );
};

export { CnxLabelSearchContainerItem };
export default CnxHeader;
