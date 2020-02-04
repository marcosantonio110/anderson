import React, { Component } from "react";
import "./style.css";

import { FaWindowMaximize } from "react-icons/fa";

export default class CnxModal extends Component {
  constructor(props) {
    super(props);
    this.closerModal = this.closerModal.bind(this);
  }

  closerModal() {
    const modal = document.querySelector("#modalLateral");
    modal.style.right = "-50%";
    modal.style.opacity = "0";
    modal.style.zIndex = "-1";
  }

  render() {
    return (
      <div id="modalLateral" className="">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6">
            <h5 id="ModalLateralTitulo" style={{ float: "left" }}>
              {this.props.title}
            </h5>
          </div>
          <div>
            <button
              type="button"
              className="close"
              style={{ marginRight: "5px" }}
              aria-label="Close"
              onClick={this.closerModal}
            >
              <i className="fa fa-times"></i>
            </button>

            <button className="close" id="width-100">
              <FaWindowMaximize style={{ fontSize: "15px" }} />
            </button>
          </div>
        </div>
        <br />

        <div className="contains_modal">{this.props.children}</div>
      </div>
    );
  }
}
