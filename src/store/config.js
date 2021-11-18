import createSagaMiddleware from "@redux-saga/core";
import { createStore,applyMiddleware } from "redux";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
const sagaMiddleware = createSagaMiddleware();
const configStore = () => {
    const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
}
export default configStore;