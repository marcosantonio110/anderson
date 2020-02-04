import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { FaRegSave, MdClear } from "react-icons/all";

import { Typeahead } from "react-bootstrap-typeahead";

import { ApplicationState } from "~/store";
import { ProductList, AutoCompleteTags } from "~/store/ducks/products/types";
import * as productsActions from "~/store/ducks/products/actions";

import CnxDataTable from "~/pages/Producs/dataTable";
// import CnxDataTable from "~/Components/library/CnxDataTables";
import CnxButtonIcon from "~/Components/library/CnxIcon";
import CnxInput from "~/Components/library/CnxInput";
import CnxButton from "~/Components/library/CnxButton";

import {
  BaseModal,
  HeaderModal,
  ModalBody,
  CnxModalFooter
} from "~/Components/library/CnxModal";

import { Container } from "./styles";

interface LocalState {
  listtable: AutoCompleteTags[];
  selectedProducts: AutoCompleteTags[];
  selectedClient: AutoCompleteTags[];
  selectedModels: AutoCompleteTags[];
  isOpenModal: boolean;
}

interface StateProps {
  listProducts: ProductList[];
  tags: AutoCompleteTags[];
  models: any;
  clients: any;
}

interface DispatchProps {
  getListProductsRequest(): void;
  getListClientRequest(): void;
}

type Props = StateProps & DispatchProps;

class Products extends Component<Props> {
  state: LocalState = {
    listtable: [],
    selectedClient: [],
    selectedProducts: [],
    selectedModels: [],
    isOpenModal: false
  };

  componentDidMount() {
    const { getListProductsRequest, getListClientRequest } = this.props;
    getListProductsRequest();
    getListClientRequest();
  }

  search = () => {
    const { listProducts } = this.props;
    const { selectedProducts, selectedModels, selectedClient } = this.state;

    let data: any = [];

    if (!!selectedProducts[0] && !!selectedModels[0] && !!selectedClient[0]) {
      selectedClient.forEach(element => {
        listProducts.forEach(list => {
          if (
            element.label === list.cliente &&
            selectedProducts[0].label === list.produto.codigoProduto &&
            selectedModels[0].label === list.produto.modelo
          ) {
            data.push({
              produto: list.produto.codigoProduto,
              modelo: list.produto.modelo,
              revisao: list.produto.revisaoBOM,
              cliente: list.cliente,
              codCliente: list.produto.codigoProdutoCliente
            });
          }
        });
      });
    } else if (!!selectedProducts[0] && !!selectedModels[0]) {
      listProducts.forEach(element => {
        if (
          selectedProducts[0].label === element.produto.codigoProduto &&
          selectedModels[0].label === element.produto.modelo
        ) {
          data.push({
            produto: element.produto.codigoProduto,
            modelo: element.produto.modelo,
            revisao: element.produto.revisaoBOM,
            cliente: element.cliente,
            codCliente: element.produto.codigoProdutoCliente
          });
        }
      });
    } else if (!!selectedProducts[0] && !!selectedClient[0]) {
      selectedClient.forEach(element => {
        listProducts.forEach(list => {
          if (
            element.label === list.cliente &&
            selectedProducts[0].label === list.produto.codigoProduto
          ) {
            data.push({
              produto: list.produto.codigoProduto,
              modelo: list.produto.modelo,
              revisao: list.produto.revisaoBOM,
              cliente: list.cliente,
              codCliente: list.produto.codigoProdutoCliente
            });
          }
        });
      });
    } else if (!!selectedModels[0] && !!selectedClient[0]) {
      selectedClient.forEach(element => {
        listProducts.forEach(list => {
          if (
            element.label === list.cliente &&
            selectedModels[0].label === list.produto.modelo
          ) {
            data.push({
              produto: list.produto.codigoProduto,
              modelo: list.produto.modelo,
              revisao: list.produto.revisaoBOM,
              cliente: list.cliente,
              codCliente: list.produto.codigoProdutoCliente
            });
          }
        });
      });
    } else if (!!selectedProducts[0]) {
      listProducts.forEach(element => {
        if (selectedProducts[0].label === element.produto.codigoProduto) {
          data.push({
            produto: element.produto.codigoProduto,
            modelo: element.produto.modelo,
            revisao: element.produto.revisaoBOM,
            cliente: element.cliente,
            codCliente: element.produto.codigoProdutoCliente
          });
        }
      });
    } else if (!!selectedModels[0]) {
      listProducts.forEach(element => {
        if (selectedModels[0].label === element.produto.modelo) {
          data.push({
            produto: element.produto.codigoProduto,
            modelo: element.produto.modelo,
            revisao: element.produto.revisaoBOM,
            cliente: element.cliente,
            codCliente: element.produto.codigoProdutoCliente
          });
        }
      });
    } else if (!!selectedClient[0]) {
      for (let index = 0; index < selectedClient.length; index++) {
        listProducts.forEach((element: ProductList) => {
          if (selectedClient[index].label === element.cliente) {
            data.push({
              produto: element.produto.codigoProduto,
              modelo: element.produto.modelo,
              revisao: element.produto.revisaoBOM,
              cliente: element.cliente,
              codCliente: element.produto.codigoProdutoCliente
            });
          }
        });
      }
    } else {
      listProducts.forEach((element: ProductList) => {
        data.push({
          produto: element.produto.codigoProduto,
          modelo: element.produto.modelo,
          revisao: element.produto.revisaoBOM,
          cliente: element.cliente,
          codCliente: element.produto.codigoProdutoCliente
        });
      });
    }

    this.setState({ listtable: data });
  };

  render() {
    const { tags, models, clients } = this.props;
    const { isOpenModal } = this.state;

    return (
      <Container>
        <BaseModal isOpenModal={isOpenModal}>
          <HeaderModal
            titleHeader="Cadastro de produto"
            funcClose={() => this.setState({ isOpenModal: false })}
            funcMaximize={() => console.log("funcMaximize")}
          />
          <ModalBody>
            <div className="cnx-row">
              <div className="cnx-input-container">
                <label className="control-label">Produto</label>
                <Typeahead
                  id="codigoId"
                  options={tags}
                  placeholder="Código do produto"
                  onChange={e => {
                    this.setState({
                      ...this.state.selectedProducts,
                      selectedProducts: e
                    });
                  }}
                />
              </div>
              <div className="cnx-input-container">
                <label className="control-label">Modelo</label>
                <CnxInput
                  value=""
                  placeholder="Digite um modelo"
                  onChange={e => {}}
                />
              </div>
              <div className="cnx-input-container">
                <label className="control-label">Rev</label>
                <CnxInput
                  value=""
                  placeholder="Digite um Rev"
                  onChange={e => {}}
                />
              </div>
            </div>

            <div className="cnx-row">
              <div className="cnx-input-container">
                <label className="control-label">Cliente</label>
                <Typeahead
                  id="ClientesId"
                  options={clients}
                  multiple={true}
                  placeholder="Digite um Clientes"
                  onChange={e => {
                    this.setState({
                      ...this.state.selectedClient,
                      selectedClient: e
                    });
                  }}
                />
              </div>
              <div className="cnx-input-container">
                <label className="control-label">Código Cliente</label>
                <CnxInput
                  value=""
                  placeholder="Digite o Código de Cliente"
                  onChange={e => {}}
                />
              </div>
              <div className="cnx-input-container">
                <label className="control-label">Linha</label>
                <Typeahead
                  id="ClientesId"
                  options={clients}
                  multiple={true}
                  placeholder="Informe uma linha"
                  onChange={e => {
                    this.setState({
                      ...this.state.selectedClient,
                      selectedClient: e
                    });
                  }}
                />
              </div>
            </div>

            <div className="cnx-row">
              <CnxButton cnxBtnColor="success" cnxTextColor="text-white">
                <FaRegSave />
                <span>Salvar</span>
              </CnxButton>
              <CnxButton cnxBtnColor="clear" cnxTextColor="text-dark">
                <MdClear />
                <span>Limpar</span>
              </CnxButton>
            </div>
          </ModalBody>
          <CnxModalFooter
            titleOne="Anexos"
            titleTwo="Historico"
            contentOne={<span>Olá, AMIGO contentOne</span>}
            contentTwo={<span>Olá, AMIGO contentTwo</span>}
          />
        </BaseModal>

        <div className="header_search">
          <div className="header_search_container_item" id="Produts">
            <label className="control-label">Produto</label>
            <Typeahead
              id="codigoId"
              options={tags}
              placeholder="Código do produto"
              onChange={e => {
                this.setState({
                  ...this.state.selectedProducts,
                  selectedProducts: e
                });
              }}
            />
          </div>

          <div className="header_search_container_item" id="Models">
            <label className="control-label">Modelo</label>
            <Typeahead
              id="ModeloId"
              options={models}
              placeholder="Modelo"
              onChange={e => {
                this.setState({
                  ...this.state.selectedModels,
                  selectedModels: e
                });
              }}
            />
          </div>

          <div className="header_search_container_item" id="Client">
            <label className="control-label">Cliente</label>
            <Typeahead
              id="ClientesId"
              options={clients}
              multiple={true}
              placeholder="Clientes"
              onChange={e => {
                this.setState({
                  ...this.state.selectedClient,
                  selectedClient: e
                });
              }}
            />
          </div>

          <div style={{ fontSize: "16px", paddingTop: "19px" }}>
            <CnxButtonIcon
              style="default"
              icon="search"
              onClick={this.search}
            />
          </div>
        </div>

        <div className="container_dataTables">
          <CnxDataTable
            openModal={() => this.setState({ isOpenModal: true })}
            data={this.state.listtable}
          />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  listProducts: state.listProducts.data,
  tags: state.listProducts.data.map((items: ProductList, index: number) => {
    return {
      id: index + 1,
      label: items.produto.codigoProduto
    };
  }),
  models: state.listProducts.data
    .map((element: ProductList, index) => {
      if (element.produto.modelo) {
        return { id: index + 1, label: element.produto.modelo };
      }
    })
    .filter(models => {
      if (models) {
        return models;
      }
    }),
  clients: state.listProducts.listClient.map((items, index) => {
    return { id: index, label: items.cliente };
  })
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators(productsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
