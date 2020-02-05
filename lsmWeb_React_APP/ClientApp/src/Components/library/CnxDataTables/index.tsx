import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import DataTable from "react-data-table-component";
import { Typeahead } from "react-bootstrap-typeahead";

import Axios from "axios";

import "./style.css";
import CnxModal from "../CnxModal/cnxModal";

import CnxInput from "~/Components/library/CnxInput";
import CnxButtonIcon from "~/Components/library/CnxIcon";

import Exportt from "~/Components/library/CnxExportExcel";

import { ApplicationState } from "~/store";
import { ProductList, AutoCompleteTags } from "~/store/ducks/products/types";
import * as productsActions from "~/store/ducks/products/actions";

//@ts-ignore
function convertArrayOfObjectsToCSV(array) {
  //@ts-ignore
  let result;

  const columnDelimiter = ",";
  const lineDelimiter = "\n";
  const keys = Object.keys(array[0]);

  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;
  //@ts-ignore
  array.forEach(item => {
    let ctr = 0;
    keys.forEach(key => {
      //@ts-ignore
      if (ctr > 0) result += columnDelimiter;
      //@ts-ignore
      result += item[key];

      ctr++;
    });
    //@ts-ignore
    result += lineDelimiter;
  });

  return result;
}
//@ts-ignore
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
//@ts-ignore
const Export = ({ onExport }) => (
  //@ts-ignore
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

interface LocalState {
  data: AutoCompleteTags[];
}

type Props = LocalState;

class CnxTable extends Component<Props> {
  state = {
    id: 0,
    produto: "",
    modelo: "",
    rev: "",
    cliente: "",
    codigoCliente: "",
    linha: ""
  };
  //@ts-ignore
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.save = this.save.bind(this);
  }
  //@ts-ignore
  openModal(e) {
    const el = document.querySelector("#modalLateral");
    //@ts-ignore
    el.style.right = "0";
    //@ts-ignore
    el.style.opacity = "1";
    //@ts-ignore
    el.style.zIndex = "999";

    if (e.id) {
      //@ts-ignore
      this.setState({
        ...this.setState,
        produto: e.id,
        modelo: e.modelo,
        cliente: e.cliente,
        //@ts-ignore
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
    const { data } = this.props;
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
                className="btn btn-default actionBtn"
                icon="plus text-success"
                onClick={this.openModal}
              />
              <CnxButtonIcon
                className="btn btn-default actionBtn"
                icon="print text-primary"
              />
              <CnxButtonIcon
                className="btn btn-default actionBtn"
                icon="trash-o gold"
              />

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
              {/* <CnxInput
                value={this.state.linha}
                onChange={e => this.setState({ ...this.setState, linha: e })}
                placeholder="Digite a linha"
                className="form-control "
              /> */}
              <Typeahead
                id="idLinha"
                options={[]}
                placeholder="informe uma linha"
                onChange={e => {
                  this.setState({});
                }}
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

const mapStateToProps = (state: ApplicationState) => ({
  // clients: state.listProducts.listClient.map((items, index) => {
  //   return { id: index, label: items.cliente };
  // })
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators(productsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CnxTable);
