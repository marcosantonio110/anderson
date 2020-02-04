/*
 * Actions types
 */
export enum ProductsTypes {
  GET_LIST_PRODUCTS_RESQUEST = "@products/GET_LIST_PRODUCTS_RESQUEST",
  GET_LIST_PRODUCTS_SUCCESS = "@products/GET_LIST_PRODUCTS_SUCCESS",
  GET_LIST_PRODUCTS_FAILURE = "@products/GET_LIST_PRODUCTS_FAILURE",
  GET_LIST_CLIENTS_RESQUEST = "@products/GET_LIST_CLIENTS_RESQUEST",
  GET_LIST_CLIENTS_SUCCESS = "@products/GET_LIST_CLIENTS_SUCCESS",
  GET_LIST_CLIENTS_FAILURE = "@products/GET_LIST_CLIENTS_FAILURE",
  POST_PRODUCT_RESQUEST = "@products/POST_PRODUCT_RESQUEST",
  POST_PRODUCT_SUCCESS = "@products/POST_PRODUCT_SUCCESS",
  POST_PRODUCT_FAILURE = "@products/POST_PRODUCT_FAILURE"
}

export interface Poduct {
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
}

export interface AutoCompleteTags {
  id: any;
  label: any;
}

export interface ProductList {
  produto: Poduct;
  linha: string;
  cliente: string;
}

export interface ListClient {
  idCliente: number;
  cliente: string;
}

/*
 * State Type
 */
export interface ProductsState {
  readonly data: ProductList[];
  readonly loading: boolean;
  readonly error: boolean;
  readonly listClient: ListClient[];
}
