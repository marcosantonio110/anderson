import { call, put, all, takeLatest } from "redux-saga/effects";

import { api } from "~/services/api";

import { ProductsTypes, ProductList, Data, AutoCompleteTags } from "./types";
import {
  getListProductsRequest,
  getListProductsSuccess,
  getListProductsFailure,
  postProductRequest,
  postProductSuccess,
  postProductFailure,
  deleteProdutoRequest,
  deleteProdutoSuccess,
  deleteProdutoFailure
} from "./actions";

function* getListProducts({
  payload
}: ReturnType<typeof getListProductsRequest>) {
  try {
    const response = yield call(api.get, "/api/v1/Produto/GetListProduto");

    const clientes: AutoCompleteTags[] = [];
    const clientesHelper: any = [];

    response.data.forEach((list: ProductList) => {
      if (list.cliente !== null && list.idCliente !== null) {
        if (!clientesHelper.includes(list.cliente)) {
          clientes.push({
            id: list.idCliente,
            label: list.cliente
          });

          clientesHelper.push(list.cliente);
        }
      }
    });

    const linhas: AutoCompleteTags[] = [];
    const linhasHelper: any = [];

    response.data.forEach((dado: ProductList) => {
      if (dado.linha !== null && dado.idLinha !== null) {
        if (!linhasHelper.includes(dado.linha)) {
          linhas.push({
            id: dado.idLinha,
            label: dado.linha
          });

          linhasHelper.push(dado.linha);
        }
      }
    });

    const models = response.data
      .map((element: ProductList, index: number) => {
        if (element.modelo) {
          return { id: index + 1, label: element.modelo };
        }
      })
      .filter((models: AutoCompleteTags) => {
        if (models) {
          return models;
        }
      });

    const listProducts: AutoCompleteTags[] = [];

    response.data.forEach((items: ProductList, index: number) => {
      if (items.codigoProduto) {
        listProducts.push({
          id: index + 1,
          label: items.codigoProduto
        });
      }
    });

    const productList: ProductList[] = response.data;

    //@ts-ignore
    const data: Data = {
      listLinha: linhas,
      listClient: clientes,
      productList: productList,
      listModels: models,
      listProducts
    };

    yield put(getListProductsSuccess(data));
  } catch (error) {
    yield put(getListProductsFailure());
  }
}

function* postProduct({ payload }: ReturnType<typeof postProductRequest>) {
  try {
    yield call(api.post, "/api/v1/Produto/PostProduto", payload.products);
    yield put(postProductSuccess());
    yield put(getListProductsRequest());
  } catch (error) {
    yield put(postProductFailure());
  }
}

function* deleteProduto({ payload }: ReturnType<typeof deleteProdutoRequest>) {
  try {
    yield call(api.post, "/api/v1/Produto/PostProduto", payload.idProdutos);
    yield put(deleteProdutoSuccess());
    yield put(getListProductsRequest());
  } catch (error) {
    yield put(deleteProdutoFailure());
  }
}

export default all([
  takeLatest(ProductsTypes.GET_LIST_PRODUCTS_RESQUEST, getListProducts),
  takeLatest(ProductsTypes.POST_PRODUCT_RESQUEST, postProduct),
  takeLatest(ProductsTypes.DELETE_PRODUCT_RESQUEST, deleteProduto)
]);
