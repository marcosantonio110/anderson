import React from "react";
import { FaWindowMaximize } from "react-icons/fa";

import ButtonModal from "./ButtomModal";

interface Props {
  titleHeader: string;
}

const CnxModalHeader: React.FC<Props> = ({ titleHeader }) => {
  return (
    <div className="row">
      <div className="col-xs-6 col-sm-6 col-md-6">
        <h5 id="ModalLateralTitulo" style={{ float: "left" }}>
          {titleHeader}
        </h5>
      </div>
      <div>
        <ButtonModal
          type="button"
          className="close"
          style={{ marginRight: "5px" }}
          aria-label="Close"
          onClick={() => console.log("CLOSE")}
        >
          <i className="fa fa-times"></i>
        </ButtonModal>

        <ButtonModal className="close" id="width-100">
          <FaWindowMaximize style={{ fontSize: "15px" }} />
        </ButtonModal>
      </div>
    </div>
  );
};

export default CnxModalHeader;
