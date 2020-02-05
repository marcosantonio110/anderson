import React, { Component } from "react";
import DataTable from "react-data-table-component";

import CnxButtonIcon from "~/Components/library/CnxIcon";
import Exportt from "~/Components/library/CnxExportExcel";

interface LocalState {
  data: any;
  openModal(): void;
}

function selectedRow() {
  console.log("Ola");
}

type Props = LocalState;

class CnxTable extends Component<Props> {
  //@ts-ignore
  actionProduto = row => {
    console.log("OLAOLAOL", row);
  };

  columns: any = [
    {
      name: "Produto",
      selector: "produto",
      sortable: true,
      //@ts-ignore
      cell: row => (
        <span
          className="actionDatatabls"
          onClick={() => this.actionProduto(row)}
        >
          {row.produto}
        </span>
      )
    },
    {
      name: "Modelo",
      selector: "modelo",
      sortable: true
    },

    {
      name: "Revisão",
      selector: "revisao",
      sortable: true
    },

    {
      name: "Cliente",
      selector: "cliente",
      sortable: true
    },

    {
      name: "Código cliente",
      selector: "codCliente",
      sortable: true
    }
  ];
  render() {
    const { data, openModal } = this.props;
    return (
      <div>
        <DataTable
          noDataComponent={<b style={{ fontSize: "20px" }}>Nenhum registro</b>}
          noHeader={true}
          columns={this.columns}
          data={data}
          fixedHeader={true}
          fixedHeaderScrollHeight="380px"
          pagination={true}
          paginationComponentOptions={{
            rowsPerPageText: "linhas por pagina",
            rangeSeparatorText: "of",
            noRowsPerPage: false
          }}
          striped={true}
          selectableRows={true}
          //@ts-ignore
          selecionávelRowsHighlight={true}
          highlightOnHover={true}
          subHeader={true}
          responsive={true}
          subHeaderComponent={
            <div
              style={{
                display: "flex",
                alignItems: "left",
                padding: "0px",
                marginLeft: "-23px"
              }}
            >
              <CnxButtonIcon
                className="btn btn-default actionBtn"
                icon="plus text-success"
                onClick={openModal}
              />
              <CnxButtonIcon
                className="btn btn-default actionBtn"
                icon="print text-primary"
              />
              <CnxButtonIcon
                className="btn btn-default actionBtn"
                icon="trash-o gold"
              />

              <Exportt data={data} />
            </div>
          }
          subHeaderAlign="left"
          Selected={selectedRow}
        />
      </div>
    );
  }
}

export default CnxTable;
