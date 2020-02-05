import { Reducer } from "redux";
// import producer from 'immer'
import { ProductsState, ProductsTypes } from "./types";

const INITIAL_STATE: ProductsState = {
  data: {
    listLinha: [],
    listClient: [],
    productList: [],
    listModels: [],
    listProducts: []
  },
  loading: false,
  error: false
};

const reducer: Reducer<ProductsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductsTypes.GET_LIST_PRODUCTS_RESQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case ProductsTypes.GET_LIST_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: {
          listLinha: action.payload.data.listLinha,
          listClient: action.payload.data.listClient,
          productList: action.payload.data.productList,
          listModels: action.payload.data.listModels,
          listProducts: action.payload.data.listProducts
        },
        loading: false,
        error: false
      };
    case ProductsTypes.GET_LIST_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };
    case ProductsTypes.POST_PRODUCT_RESQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case ProductsTypes.POST_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false
      };
    case ProductsTypes.POST_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
