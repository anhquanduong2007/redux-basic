import * as types from "../constants";
import { takeLatest,call,put,delay} from "redux-saga/effects";
import axios from "axios";
import {getDataSuccess,getDataFailed,showLoading,hiddenLoading,addDataSuccess,addDataFailed,editDataSuccess,editDataFailed,resetID} from "../actions";
function* getDataSaga() {
    yield put(showLoading());
    const fetchData =  () => {
        return axios.get(`https://6194e1a974c1bd00176c69e2.mockapi.io/api`); 
    }
    const response = yield call(fetchData);
    if(response.status === 200) {
        yield put(getDataSuccess(response.data));
        yield delay(500);
        yield put(hiddenLoading());
    }else {
        yield put(getDataFailed("Lỗi request"));
    }
    yield delay(500);
    yield put(hiddenLoading());

}
function* addDataSaga({payload}) {
    yield put(showLoading());
    const {data} = payload;
    const fetchDataAdd =  () => {
        return axios.post(`https://6194e1a974c1bd00176c69e2.mockapi.io/api`,data); 
    }
    const response = yield call(fetchDataAdd);
    if(response.status === 200 || response.status === 201){
        yield put(addDataSuccess(response.data));
        yield delay(500);
        yield put(hiddenLoading());
    }else {
        yield put(addDataFailed("Lỗi request"));
    }
    yield delay(500);
    yield put(hiddenLoading());

}
function* editDataSaga({payload}) {
    const {id,data} = payload;
    console.log({id,data});
    const fetchDataEdit =  () => {
        return axios.put(`https://6194e1a974c1bd00176c69e2.mockapi.io/api/${id}`,data); 
    }
    const response = yield call(fetchDataEdit);
    console.log(response);
    if(response.status === 200 || response.status === 201){
        yield put(editDataSuccess(response.data));
        yield put(resetID());
        yield delay(500);
        yield put(hiddenLoading());
    }else {
        yield put(editDataFailed("Lỗi request"));
    }
    yield delay(500);
    yield put(hiddenLoading());
    
  
}
function* rootSaga() {
    yield takeLatest(types.GET_DATA, getDataSaga);
    yield takeLatest(types.ADD_DATA,addDataSaga);
    yield takeLatest(types.EDIT_DATA,editDataSaga);
}
export default rootSaga;