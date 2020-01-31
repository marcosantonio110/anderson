import {createStore, compose, applyMiddleware, Store} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { ProductsState } from './ducks/products/types'

import rootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rooSaga'

export interface ApplicationState {
  listProducts: ProductsState
}


const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? // @ts-ignore
      // @ts-ignore
      console.tron.createSagaMonitor()
    : null;
const middlewares = [];
const sagaMiddleware = createSagaMiddleware({
  sagaMonitor
});
middlewares.push(sagaMiddleware);

const composer =
  process.env.NODE_ENV === 'development'
    ? compose(
        applyMiddleware(...middlewares),
        // @ts-ignore
        console.tron.createEnhancer()
      )
    : applyMiddleware(...middlewares);

const store: Store<ApplicationState> = createStore(rootReducer, composer);

sagaMiddleware.run(rootSaga);

export default store;
