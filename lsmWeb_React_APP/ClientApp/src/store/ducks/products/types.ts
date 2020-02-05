/*
 * Actions types
 */
export enum ProductsTypes {
  GET_LIST_PRODUCTS_RESQUEST = "@products/GET_LIST_PRODUCTS_RESQUEST",
  GET_LIST_PRODUCTS_SUCCESS = "@products/GET_LIST_PRODUCTS_SUCCESS",
  GET_LIST_PRODUCTS_FAILURE = "@products/GET_LIST_PRODUCTS_FAILURE",
  POST_PRODUCT_RESQUEST = "@products/POST_PRODUCT_RESQUEST",
  POST_PRODUCT_SUCCESS = "@products/POST_PRODUCT_SUCCESS",
  POST_PRODUCT_FAILURE = "@products/POST_PRODUCT_FAILURE",
  DELETE_PRODUCT_RESQUEST = "@products/DELETE_PRODUCT_RESQUEST",
  DELETE_PRODUCT_SUCCESS = "@products/DELETE_PRODUCT_SUCCESS",
  DELETE_PRODUCT_FAILURE = "@products/DELETE_PRODUCT_FAILURE"
}

export interface ProductList {
  idProduto: number;
  codigoProduto: string;
  codigoProdutoCliente?: string;
  modelo?: any;
  descricao?: string;
  revisaoBOM?: any;
  imagem?: any;
  dataHoraUltimoStatus?: string;
  xml?: any;
  instrucaoPDF?: any;
  idCliente: number;
  idLinha: number;
  taktTime?: any;
  tempoMontagem?: any;
  retrabalhoTodas?: any;
  multiploEmbalagem?: any;
  qtdCicloBaixaSAP?: any;
  idDepositoSAP?: any;
  idRecursoBaixaSAP?: any;
  idWorkflow?: any;
  situacaoRegistro?: any;
  linha: string;
  cliente: string;
}

export interface AutoCompleteTags {
  id: number;
  label: string;
}

export interface Data {
  listLinha: AutoCompleteTags[];
  listClient: AutoCompleteTags[];
  productList: ProductList[];
  listModels: AutoCompleteTags[];
  listProducts: AutoCompleteTags[];
}
/*
 * State Type
 */
export interface ProductsState {
  readonly data: Data;
  readonly loading: boolean;
  readonly error: boolean;
}
