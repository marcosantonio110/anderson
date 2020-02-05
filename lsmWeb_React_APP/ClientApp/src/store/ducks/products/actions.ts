import { action } from "typesafe-actions";
import { ProductsTypes, Data, ProductList } from "./types";

export const getListProductsRequest = () =>
  action(ProductsTypes.GET_LIST_PRODUCTS_RESQUEST, {});

export const getListProductsSuccess = (data: Data) =>
  action(ProductsTypes.GET_LIST_PRODUCTS_SUCCESS, { data });

export const getListProductsFailure = () =>
  action(ProductsTypes.GET_LIST_PRODUCTS_FAILURE, {});

export const postProductRequest = (products: ProductList) =>
  action(ProductsTypes.POST_PRODUCT_RESQUEST, { products });

export const postProductSuccess = () =>
  action(ProductsTypes.POST_PRODUCT_SUCCESS, {});

export const postProductFailure = () =>
  action(ProductsTypes.POST_PRODUCT_FAILURE, {});

export const deleteProdutoRequest = (idProdutos: number) =>
  action(ProductsTypes.DELETE_PRODUCT_RESQUEST, { idProdutos });

export const deleteProdutoSuccess = () =>
  action(ProductsTypes.DELETE_PRODUCT_SUCCESS, {});

export const deleteProdutoFailure = () =>
  action(ProductsTypes.DELETE_PRODUCT_FAILURE, {});
