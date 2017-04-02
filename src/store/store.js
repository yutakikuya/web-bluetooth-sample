import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from '../reducers/root'
import rootSaga from '../sagas/root'

/**
* reduxのstoreのセットアップ。redux-saga対応。
* @see http://qiita.com/kuy/items/716affc808ebb3e1e8ac
*/
export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    {
      bluetooth: {}
    },
    applyMiddleware(
      sagaMiddleware, logger()
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
