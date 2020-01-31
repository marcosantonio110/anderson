import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

import { ApplicationState } from "~/store";
import { ProductList, AutoCompleteTags } from "~/store/ducks/products/types";
import * as productsActions from "~/store/ducks/products/actions";

import CnxDataTable from "~/Components/library/CnxDataTables";
import CnxButtonIcon from "~/Components/library/CnxIcon";

import { BaseModal, HeaderModal } from "~/Components/library/CnxModal";

import { Container } from "./styles";

interface LocalState {
  listtable: AutoCompleteTags[];
  selectedProducts: AutoCompleteTags[];
  selectedClient: AutoCompleteTags[];
  selectedModels: AutoCompleteTags[];
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
    selectedModels: []
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

    return (
      <Container>
        <BaseModal isOpenModal={true}>
          <HeaderModal titleHeader="Produto" />
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
          <CnxDataTable data={this.state.listtable} />
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
