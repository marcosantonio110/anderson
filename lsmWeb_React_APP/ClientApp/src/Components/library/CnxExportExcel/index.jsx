import React, { Component } from "react";
import ReactExport from "react-data-export";

import CnxButtonIcon from "~/Components/library/CnxIcon";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default class Download extends Component {
  render() {
    return (
      <ExcelFile
        element={
          <CnxButtonIcon
            style="default actionBtn"
            icon="file-excel-o text-success"
          />
        }
        fileExtension="xlsx"
      >
        <ExcelSheet data={this.props.data} name="Employees">
          <ExcelColumn label="Produto" value="produto" />
          <ExcelColumn label="Modelo" value="modelo" />
          <ExcelColumn label="Revisão" value="revisao" />
          <ExcelColumn label="Cliente" value="cliente" />
          <ExcelColumn label="Codigo Cliente" value="cod_cliente" />
        </ExcelSheet>
      </ExcelFile>
    );
  }
}
