import { call, put, all, takeLatest } from "redux-saga/effects";

import { api } from "~/services/api";

import { ProductsTypes, ProductList } from "./types";
import {
  getListProductsRequest,
  getListProductsSuccess,
  getListProductsFailure,
  getListClientRequest,
  getListClientSuccess,
  getListClientFailure,
  postProductRequest,
  postProductSuccess,
  postProductFailure
} from "./actions";

function* getListProducts({
  payload
}: ReturnType<typeof getListProductsRequest>) {
  try {
    const response = yield call(api.get, "/api/v1/BOM/GetListProduto");

    interface Linhas {
      id: number;
      linha: string;
    }
    const linhas: Linhas[] = [];

    response.data.forEach((lists: ProductList, index: number) => {
      if (lists.linha !== null && lists.cliente !== null) {
        if (linhas.length < 1) {
          console.log("IF");
          linhas.push({
            id: lists.produto.idLinha,
            linha: lists.linha
          });
        } else {
          if (linhas) {
            console.log("1");
          }
          console.log("ELSE");
        }
      }
    });
    console.log("linhas:", linhas);
    // console.log("response.data:", response.data);

    yield put(getListProductsSuccess(response.data));
  } catch (error) {
    yield put(getListProductsFailure());
  }
}

function* getListClients({ payload }: ReturnType<typeof getListClientRequest>) {
  try {
    const response = yield call(api.get, "/api/v1/BOM/GetClientes");
    yield put(getListClientSuccess(response.data));
  } catch (error) {
    yield put(getListClientFailure());
  }
}

function* postProduct({ payload }: ReturnType<typeof postProductRequest>) {
  try {
    yield call(api.post, "/api/v1/BOM/PostProduto", payload.products);
    yield put(postProductSuccess());
  } catch (error) {
    yield put(postProductFailure());
  }
}

export default all([
  takeLatest(ProductsTypes.GET_LIST_PRODUCTS_RESQUEST, getListProducts),
  takeLatest(ProductsTypes.GET_LIST_CLIENTS_RESQUEST, getListClients),
  takeLatest(ProductsTypes.POST_PRODUCT_RESQUEST, postProduct)
]);
