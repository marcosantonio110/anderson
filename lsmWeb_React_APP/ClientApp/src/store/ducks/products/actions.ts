import { action } from "typesafe-actions";
import { ProductsTypes, ProductList, ListClient } from "./types";

export const getListProductsRequest = () =>
  action(ProductsTypes.GET_LIST_PRODUCTS_RESQUEST, {});

export const getListProductsSuccess = (data: ProductList[]) =>
  action(ProductsTypes.GET_LIST_PRODUCTS_SUCCESS, { data });

export const getListProductsFailure = () =>
  action(ProductsTypes.GET_LIST_PRODUCTS_FAILURE, {});

export const getListClientRequest = () =>
  action(ProductsTypes.GET_LIST_CLIENTS_RESQUEST, {});

export const getListClientSuccess = (data: ListClient[]) =>
  action(ProductsTypes.GET_LIST_CLIENTS_SUCCESS, { data });

export const getListClientFailure = () =>
  action(ProductsTypes.GET_LIST_CLIENTS_FAILURE, {});

export const postProductRequest = (products: ProductList) =>
  action(ProductsTypes.POST_PRODUCT_RESQUEST, { products });

export const postProductSuccess = () =>
  action(ProductsTypes.POST_PRODUCT_SUCCESS, {});

export const postProductFailure = () =>
  action(ProductsTypes.POST_PRODUCT_FAILURE, {});
