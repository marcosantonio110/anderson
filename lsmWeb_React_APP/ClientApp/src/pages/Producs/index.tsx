import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import {
  FaRegSave,
  MdClear,
  FaPlus,
  FaPrint,
  FaRegTrashAlt
} from "react-icons/all";

import DataTable from "react-data-table-component";
import { Typeahead } from "react-bootstrap-typeahead";

import Exportt from "~/Components/library/CnxExportExcel";

import { ApplicationState } from "~/store";
import { ProductList, AutoCompleteTags } from "~/store/ducks/products/types";
import * as productsActions from "~/store/ducks/products/actions";

import CnxInput from "~/Components/library/CnxInput";
import CnxButton from "~/Components/library/CnxButton";

import {
  BaseModal,
  HeaderModal,
  ModalBody,
  CnxModalFooter
} from "~/Components/library/CnxModal";
import CnxHeader, {
  CnxLabelSearchContainerItem
} from "~/Components/library/CnxHeader";
import CnxDataTableContainer from "~/Components/library/CnxDataTableContainer";

import { Container } from "./styles";

interface ColumnsRow {
  produto?: string;
  modelo?: string;
  revisao?: string;
  cliente?: string;
  codCliente?: string;
  key: number;
  cnxData: ProductList;
}

interface LocalState {
  listtable: AutoCompleteTags[];
  selectedProducts: AutoCompleteTags[];
  selectedClient: AutoCompleteTags[];
  selectedModels: AutoCompleteTags[];
  isOpenModal: boolean;
  updateProduct: ProductList;
  produto: string;
  modelo: string;
  rev: string;
  cliente: AutoCompleteTags;
  codigoCliente: string;
  linha: AutoCompleteTags;
  actionModal: string;
}

interface StateProps {
  productList: ProductList[];
  listClient: AutoCompleteTags[];
  listLinha: AutoCompleteTags[];
  listModels: AutoCompleteTags[];
  listProducts: AutoCompleteTags[];
}

interface DispatchProps {
  getListProductsRequest(): void;
  postProductRequest(products: any): void;
}

type Props = StateProps & DispatchProps;

class Products extends Component<Props> {
  state: LocalState = {
    listtable: [],
    selectedClient: [],
    selectedProducts: [],
    selectedModels: [],
    isOpenModal: false,
    updateProduct: {
      idProduto: 0,
      codigoProduto: "",
      codigoProdutoCliente: "",
      modelo: "",
      descricao: "",
      revisaoBOM: "",
      imagem: "",
      dataHoraUltimoStatus: "",
      xml: "",
      instrucaoPDF: "",
      idCliente: 0,
      idLinha: 0,
      taktTime: 0,
      tempoMontagem: 0,
      retrabalhoTodas: 0,
      multiploEmbalagem: 0,
      qtdCicloBaixaSAP: 0,
      idDepositoSAP: 0,
      idRecursoBaixaSAP: 0,
      idWorkflow: 0,
      situacaoRegistro: 0,
      linha: "",
      cliente: ""
    },

    //postProduct
    produto: "",
    modelo: "",
    rev: "",
    cliente: {
      id: 0,
      label: ""
    },
    codigoCliente: "",
    linha: {
      id: 0,
      label: ""
    },
    actionModal: "add"
  };
  TypeaheadLinhaClear: any;
  TypeaheadClienteCliente: any;

  componentDidMount() {
    const { getListProductsRequest } = this.props;
    getListProductsRequest();
  }

  search = () => {
    const { productList } = this.props;
    const { selectedProducts, selectedModels, selectedClient } = this.state;
    let data: any = [];
    if (!!selectedProducts[0] && !!selectedModels[0] && !!selectedClient[0]) {
      selectedClient.forEach(element => {
        productList.forEach(list => {
          if (
            element.label === list.cliente &&
            selectedProducts[0].label === list.codigoProduto &&
            selectedModels[0].label === list.modelo
          ) {
            data.push({
              produto: list.codigoProduto,
              modelo: list.modelo,
              revisao: list.revisaoBOM,
              cliente: list.cliente,
              codCliente: list.codigoProdutoCliente,
              keyField: list.idProduto,
              cnxData: list
            });
          }
        });
      });
    } else if (!!selectedProducts[0] && !!selectedModels[0]) {
      productList.forEach(element => {
        if (
          selectedProducts[0].label === element.codigoProduto &&
          selectedModels[0].label === element.modelo
        ) {
          data.push({
            produto: element.codigoProduto,
            modelo: element.modelo,
            revisao: element.revisaoBOM,
            cliente: element.cliente,
            codCliente: element.codigoProdutoCliente,
            keyField: element.idProduto,
            cnxData: element
          });
        }
      });
    } else if (!!selectedProducts[0] && !!selectedClient[0]) {
      selectedClient.forEach(element => {
        productList.forEach(list => {
          if (
            element.label === list.cliente &&
            selectedProducts[0].label === list.codigoProduto
          ) {
            data.push({
              produto: list.codigoProduto,
              modelo: list.modelo,
              revisao: list.revisaoBOM,
              cliente: list.cliente,
              codCliente: list.codigoProdutoCliente,
              keyField: list.idProduto,
              cnxData: list
            });
          }
        });
      });
    } else if (!!selectedModels[0] && !!selectedClient[0]) {
      selectedClient.forEach(element => {
        productList.forEach(list => {
          if (
            element.label === list.cliente &&
            selectedModels[0].label === list.modelo
          ) {
            data.push({
              produto: list.codigoProduto,
              modelo: list.modelo,
              revisao: list.revisaoBOM,
              cliente: list.cliente,
              codCliente: list.codigoProdutoCliente,
              keyField: list.idProduto,
              cnxData: list
            });
          }
        });
      });
    } else if (!!selectedProducts[0]) {
      productList.forEach(element => {
        if (selectedProducts[0].label === element.codigoProduto) {
          data.push({
            produto: element.codigoProduto,
            modelo: element.modelo,
            revisao: element.revisaoBOM,
            cliente: element.cliente,
            codCliente: element.codigoProdutoCliente,
            keyField: element.idProduto,
            cnxData: element
          });
        }
      });
    } else if (!!selectedModels[0]) {
      productList.forEach(element => {
        if (selectedModels[0].label === element.modelo) {
          data.push({
            produto: element.codigoProduto,
            modelo: element.modelo,
            revisao: element.revisaoBOM,
            cliente: element.cliente,
            codCliente: element.codigoProdutoCliente,
            keyField: element.idProduto,
            cnxData: element
          });
        }
      });
    } else if (!!selectedClient[0]) {
      for (let index = 0; index < selectedClient.length; index++) {
        productList.forEach((element: ProductList) => {
          if (selectedClient[index].label === element.cliente) {
            data.push({
              produto: element.codigoProduto,
              modelo: element.modelo,
              revisao: element.revisaoBOM,
              cliente: element.cliente,
              codCliente: element.codigoProdutoCliente,
              keyField: element.idProduto,
              cnxData: element
            });
          }
        });
      }
    } else {
      productList.forEach((element: ProductList) => {
        data.push({
          produto: element.codigoProduto,
          modelo: element.modelo,
          revisao: element.revisaoBOM,
          cliente: element.cliente,
          codCliente: element.codigoProdutoCliente,
          keyField: element.idProduto,
          cnxData: element
        });
      });
    }
    this.setState({ listtable: data });
  };

  handleChange = (value: any, state: string) => {
    switch (state) {
      case "produto":
        this.setState({ produto: value });
        break;
      case "modelo":
        this.setState({ modelo: value });
        break;
      case "rev":
        this.setState({ rev: value });
        break;
      case "cliente":
        this.setState({ cliente: value[0] });
        break;
      case "codigoCliente":
        this.setState({ codigoCliente: value });
        break;
      case "linha":
        this.setState({ linha: value[0] });
        break;

      default:
        break;
    }
  };

  addUpdateProduct = () => {
    const { postProductRequest } = this.props;
    const {
      updateProduct,
      produto,
      modelo,
      rev,
      cliente,
      codigoCliente,
      linha,
      actionModal
    } = this.state;

    if (actionModal === "add") {
      const config = {
        codigoProduto: produto ? produto : null,
        codigoProdutoCliente: codigoCliente ? codigoCliente : null,
        modelo: modelo ? modelo : null,
        revisaoBOM: rev ? rev : null,
        idCliente: cliente.id ? cliente.id : null,
        idLinha: linha.id ? linha.id : null,
        linha: linha.label ? linha.label : null,
        cliente: cliente.label ? cliente.label : null
      };
      postProductRequest(config);
      setTimeout(() => {
        this.search();
      }, 200);
      this.clearModal();
    } else if (actionModal === "update") {
      const config = {
        idProduto: updateProduct.idProduto,
        codigoProduto: produto,
        codigoProdutoCliente: codigoCliente,
        modelo: modelo,
        revisaoBOM: rev,
        idCliente: cliente.id,
        idLinha: linha.id,
        linha: linha.label,
        cliente: cliente.label
      };

      postProductRequest(config);
      setTimeout(() => {
        this.search();
      }, 200);
      this.closeModal();
    }
  };

  closeModal = () => {
    this.clearModal();
    this.setState({ isOpenModal: false, actionModal: "add" });
  };

  clearModal = () => {
    this.TypeaheadClienteCliente.clear();
    this.TypeaheadLinhaClear.clear();
    this.setState({
      produto: "",
      modelo: "",
      rev: "",
      cliente: {
        id: 0,
        label: ""
      },
      codigoCliente: "",
      linha: {
        id: 0,
        label: ""
      }
    });
  };

  updateProduct = (row: ColumnsRow) => {
    const { listClient, listLinha } = this.props;

    if (row.cliente) {
      listClient.filter(items => {
        if (items.label === row.cliente) {
          this.TypeaheadClienteCliente.state.selected.push(row.cliente);
          this.setState({ cliente: items });
        }
      });
    }

    listLinha.filter(items => {
      if (items.label === row.cnxData.linha) {
        console.log();
        this.TypeaheadLinhaClear.state.selected.push(row.cnxData.linha);
        this.setState({ linha: items });
      }
    });

    this.setState({
      actionModal: "update",
      isOpenModal: true,
      produto: row.produto ? row.produto : "",
      modelo: row.modelo ? row.modelo : "",
      rev: row.revisao ? row.revisao : "",
      codigoCliente: row.codCliente ? row.codCliente : "",
      updateProduct: row.cnxData
    });
  };

  columns: any = [
    {
      name: "Produto",
      selector: "produto",
      sortable: true,
      keyField: "key",
      cnxData: "cnxData",
      //@ts-ignore
      cell: row => (
        <span
          className="actionDatatabls"
          onClick={() => this.updateProduct(row)}
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
    const { listProducts, listModels, listClient, listLinha } = this.props;
    const {
      isOpenModal,
      listtable,
      produto,
      modelo,
      rev,
      codigoCliente
    } = this.state;

    return (
      <Container>
        <BaseModal isOpenModal={isOpenModal}>
          <HeaderModal
            titleHeader="Cadastro de produto"
            funcClose={this.closeModal}
            funcMaximize={() => console.log("function is not implemented")}
          />
          <ModalBody>
            <div className="cnx-row">
              <div className="cnx-input-container">
                <label className="control-label">Produto</label>
                <CnxInput
                  value={produto}
                  placeholder="Digite um modelo"
                  onChange={e => this.handleChange(e, "produto")}
                />
              </div>
              <div className="cnx-input-container">
                <label className="control-label">Modelo</label>
                <CnxInput
                  value={modelo}
                  placeholder="Digite um modelo"
                  onChange={e => this.handleChange(e, "modelo")}
                />
              </div>
              <div className="cnx-input-container">
                <label className="control-label">Rev</label>
                <CnxInput
                  value={rev}
                  placeholder="Digite um Rev"
                  onChange={e => this.handleChange(e, "rev")}
                />
              </div>
            </div>

            <div className="cnx-row">
              <div className="cnx-input-container">
                <label className="control-label">Cliente</label>
                <Typeahead
                  id="ClientesId"
                  options={listClient}
                  placeholder="Digite um Clientes"
                  ref={ref => (this.TypeaheadClienteCliente = ref)}
                  onChange={e => this.handleChange(e, "cliente")}
                />
              </div>
              <div className="cnx-input-container">
                <label className="control-label">Código Cliente</label>
                <CnxInput
                  value={codigoCliente}
                  placeholder="Digite o Código de Cliente"
                  onChange={e => this.handleChange(e, "codigoCliente")}
                />
              </div>
              <div className="cnx-input-container">
                <label className="control-label">Linha</label>
                <Typeahead
                  id="linhaId"
                  options={listLinha}
                  placeholder="Informe uma linha"
                  ref={ref => (this.TypeaheadLinhaClear = ref)}
                  onChange={e => this.handleChange(e, "linha")}
                />
              </div>
            </div>

            <div className="cnx-row">
              <CnxButton
                cnxBtnColor="success"
                cnxTextColor="text-white"
                onClick={this.addUpdateProduct}
              >
                <FaRegSave />
                <span>Salvar</span>
              </CnxButton>
              <CnxButton
                cnxBtnColor="clear"
                cnxTextColor="text-dark"
                onClick={this.clearModal}
              >
                <MdClear />
                <span>Limpar</span>
              </CnxButton>
            </div>
          </ModalBody>
          <CnxModalFooter
            titleOne="Anexos"
            titleTwo="Historico"
            contentOne={<h1>Anexos</h1>}
            contentTwo={<h1>Historico</h1>}
          />
        </BaseModal>

        <CnxHeader funcSearch={this.search}>
          <CnxLabelSearchContainerItem label="Produto">
            <Typeahead
              id="codigoId"
              options={listProducts}
              placeholder="Código do produto"
              onChange={e => {
                this.setState({
                  ...this.state.selectedProducts,
                  selectedProducts: e
                });
              }}
            />
          </CnxLabelSearchContainerItem>
          <CnxLabelSearchContainerItem label="Modelo">
            <Typeahead
              id="ModeloId"
              options={listModels}
              placeholder="Modelo"
              onChange={e => {
                this.setState({
                  ...this.state.selectedModels,
                  selectedModels: e
                });
              }}
            />
          </CnxLabelSearchContainerItem>
          <CnxLabelSearchContainerItem label="Cliente">
            <Typeahead
              id="ClientesId"
              options={listClient}
              multiple={true}
              placeholder="Clientes"
              onChange={e => {
                this.setState({
                  ...this.state.selectedClient,
                  selectedClient: e
                });
              }}
            />
          </CnxLabelSearchContainerItem>
        </CnxHeader>

        <CnxDataTableContainer>
          <DataTable
            noDataComponent={
              <b style={{ fontSize: "20px" }}>Nenhum registro</b>
            }
            noHeader={true}
            columns={this.columns}
            data={listtable}
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
                <CnxButton
                  className="only-icon"
                  cnxBtnColor="clear"
                  cnxTextColor="text-success"
                  onClick={() => this.setState({ isOpenModal: true })}
                >
                  <FaPlus />
                </CnxButton>

                <CnxButton
                  className="only-icon"
                  cnxBtnColor="clear"
                  cnxTextColor="text-primary"
                >
                  <FaPrint />
                </CnxButton>

                <CnxButton
                  className="only-icon"
                  cnxBtnColor="clear"
                  cnxTextColor="text-dark"
                >
                  <FaRegTrashAlt />
                </CnxButton>

                <Exportt data={listtable} />
              </div>
            }
            subHeaderAlign="left"
          />
        </CnxDataTableContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  productList: state.listProducts.data.productList,
  listClient: state.listProducts.data.listClient,
  listLinha: state.listProducts.data.listLinha,
  listModels: state.listProducts.data.listModels,
  listProducts: state.listProducts.data.listProducts
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators(productsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
