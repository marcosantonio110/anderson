import React, { Component } from "react";
import DataTable from "react-data-table-component";

import CnxButtonIcon from "~/Components/library/CnxIcon";
import Exportt from "~/Components/library/CnxExportExcel";

import { AutoCompleteTags } from "~/store/ducks/products/types";

const columns = [
  {
    name: "Produto",
    selector: "produto",
    sortable: true
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

interface LocalState {
  data: AutoCompleteTags[];
  openModal(): void;
}

type Props = LocalState;

class CnxTable extends Component<Props> {
  render() {
    const { data, openModal } = this.props;
    return (
      <div>
        <DataTable
          noDataComponent={<b style={{ fontSize: "20px" }}>Nenhum registro</b>}
          noHeader={true}
          columns={columns}
          //@ts-ignore
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
                style="default actionBtn"
                icon="plus text-success"
                onClick={openModal}
              />
              <CnxButtonIcon
                style="default actionBtn"
                icon="print text-primary"
              />
              <CnxButtonIcon style="default actionBtn" icon="trash-o gold" />

              <Exportt data={this.props.data} />
            </div>
          }
          subHeaderAlign="left"
          onRowClicked={e => {}}
        />
      </div>
    );
  }
}

export default CnxTable;
