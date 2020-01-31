import React, { Component } from "react";
import DataTable from "react-data-table-component";

import Axios from "axios";

import "./style.css";
import CnxModal from "../CnxModal/cnxModal";

import CnxInput from "~/Components/library/CnxInput";
import CnxButtonIcon from "~/Components/library/CnxIcon";

import Exportt from "~/Components/library/CnxExportExcel";

function convertArrayOfObjectsToCSV(array) {
  let result;

  const columnDelimiter = ",";
  const lineDelimiter = "\n";
  const keys = Object.keys(array[0]);

  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  array.forEach(item => {
    let ctr = 0;
    keys.forEach(key => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];

      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}

function downloadCSV(array) {
  const link = document.createElement("a");
  let csv = convertArrayOfObjectsToCSV(array);
  if (csv == null) return;

  const filename = "export.csv";

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute("href", encodeURI(csv));
  link.setAttribute("download", filename);
  link.click();
}

const Export = ({ onExport }) => (
  <button onClick={e => onExport(e.target.value)}>Export</button>
);

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

export default class MyComponent extends Component {
  state = {
    id: 0,
    produto: "",
    modelo: "",
    rev: "",
    cliente: "",
    codigoCliente: "",
    linha: ""
  };

  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.save = this.save.bind(this);
  }

  openModal(e) {
    const el = document.querySelector("#modalLateral");
    el.style.right = "0";
    el.style.opacity = "1";
    el.style.zIndex = "999";

    if (e.id) {
      this.setState({
        ...this.setState,
        produto: e.id,
        modelo: e.modelo,
        cliente: e.cliente,
        modelo: e.modelo,
        rev: e.revisao,
        codigoCliente: e.cod_cliente
      });
    } else {
      this.setState({
        ...this.setState,
        id: 0,
        produto: "",
        modelo: "",
        rev: "",
        cliente: "",
        codigoCliente: "",
        linha: ""
      });
    }
  }

  save() {
    let dados = {
      idProduto: this.state.id,
      codigoProduto: this.state.produto,
      codigoProdutoCliente: this.state.codigoCliente,
      modelo: this.state.modelo,
      descricao: "",
      revisaoBOM: "0",
      imagem: "",
      dataHoraUltimoStatus: "",
      xml: "",
      instrucaoPDF: "",
      idCliente: this.state.cliente,
      idLinha: this.state.linha,
      taktTime: 0,
      tempoMontagem: 0,
      retrabalhoTodas: 0,
      multiploEmbalagem: 0,
      qtdCicloBaixaSAP: 0,
      idDepositoSAP: 0,
      idRecursoBaixaSAP: 0,
      idWorkflow: 0,
      situacaoRegistro: 0
    };

    const files = new FormData();
    files.append("json", JSON.stringify(dados));

    Axios.post("http://10.11.12.11:8040/api/v1/BOM/PostProduto", dados)
      .then(resp => console.log("Cara os dados Foram pro backend ", resp))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <DataTable
          noDataComponent={<b style={{ fontSize: "20px" }}>Nenhum registro</b>}
          noHeader={true}
          columns={columns}
          data={this.props.data}
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
                onClick={this.openModal}
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
          onRowClicked={e => this.openModal(e)}
        />

        <CnxModal title="Cadastro de produto">
          <div className="content-form-itens">
            <div className="item">
              <label className="control-label">Produto</label>
              <CnxInput
                className="form-control "
                value={this.state.produto}
                onChange={e => this.setState({ ...this.setState, produto: e })}
                placeholder="Digite um produto"
              />
            </div>

            <div className="item">
              <label className="control-label">Modelo</label>
              <CnxInput
                value={this.state.modelo}
                onChange={e => this.setState({ ...this.setState, modelo: e })}
                placeholder="Digite um modelo"
                className="form-control "
              />
            </div>

            <div className="item">
              <label className="control-label">Rev</label>
              <CnxInput
                value={this.state.rev}
                onChange={e => this.setState({ ...this.setState, rev: e })}
                placeholder="Digite um Rev"
                className="form-control "
              />
            </div>

            <div className="item">
              <label className="control-label">Cliente</label>
              <CnxInput
                value={this.state.cliente}
                onChange={e => this.setState({ ...this.setState, cliente: e })}
                placeholder="Digite um Cliente"
                className="form-control "
              />
            </div>

            <div className="item">
              <label className="control-label">Código Cliente</label>
              <CnxInput
                value={this.state.codigoCliente}
                onChange={e =>
                  this.setState({ ...this.setState, codigoCliente: e })
                }
                placeholder="Digite o código de cliente"
                className="form-control "
              />
            </div>

            <div className="item">
              <label className="control-label">Linha</label>
              <CnxInput
                value={this.state.linha}
                onChange={e => this.setState({ ...this.setState, linha: e })}
                placeholder="Digite a linha"
                className="form-control "
              />
            </div>
          </div>

          <div className="btnsAction">
            <button className="btn btn-success" onClick={this.save}>
              Salvar
            </button>
            <button className="btn btn-clear">Limpar</button>
          </div>

          <footer>
            <ul className="nav nav-tabs">
              <li role="presentation" className="active">
                <a data-toggle="tab" href="#anexo">
                  Anexos
                </a>
              </li>

              <li role="presentation" className="">
                <a data-toggle="tab" href="#historico">
                  Historico
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div id="anexo" className="tab-pane in active">
                <h5>Esta funcionalidade só esta ativa no modo Edição</h5>
              </div>

              <div id="historico" className="tab-pane fade">
                <h5>teste</h5>
              </div>
            </div>
          </footer>
        </CnxModal>
      </div>
    );
  }
}
