import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData } from "../Actions/actions";
import { login } from "../Api/api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
  try {
    // do api call
    let postData = action.data;
    const data = yield call(login, postData);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
