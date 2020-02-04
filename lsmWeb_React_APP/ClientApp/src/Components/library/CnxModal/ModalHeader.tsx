import React from "react";
import { FaWindowMaximize, FaTimes } from "react-icons/fa";

import { HeaderModal } from "./styles";

import ButtonModal from "./ButtomModal";

interface Props {
  titleHeader: string;
  funcClose(): void;
  funcMaximize(): void;
}

const CnxModalHeader: React.FC<Props> = ({
  titleHeader,
  funcClose,
  funcMaximize
}) => {
  return (
    <HeaderModal>
      <div>
        <h5 className="title-header">{titleHeader}</h5>
      </div>
      <div className="buttons-actions">
        <ButtonModal onClick={funcMaximize}>
          <FaWindowMaximize />
        </ButtonModal>

        <ButtonModal className="icon-close" onClick={funcClose}>
          <FaTimes />
        </ButtonModal>
      </div>
    </HeaderModal>
  );
};

export default CnxModalHeader;
