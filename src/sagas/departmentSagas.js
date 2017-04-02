import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const DEPARTMENTS_URL = 'http://localhost:3000/departments';

/* GETTING DEPARTMENTS */

export function* getDepartments() {
  try {
    const response = yield call(axios.get, DEPARTMENTS_URL);
    yield put({ type: 'GET_DEPARTMENTS_SUCCESS', payload: response.data });
  } catch (e) {
    yield put({ type: 'GET_DEPARTMENTS_FAIL', payload: e.message });
  }
}

export function* watchGettingDepartments() {
  yield takeEvery('GET_DEPARTMENTS', getDepartments);
}

/* ADDING DEPARTMENT */

export function* addDepartment(action) {
  try {
    const response = yield call(axios.post, DEPARTMENTS_URL, { name: action.payload });
    yield put({ type: 'ADD_DEPARTMENT_SUCCESS', payload: response.data });
  } catch (e) {
    yield put({ type: 'ADD_DEPARTMENT_FAIL', payload: e.message });
  }
}

export function* watchAddingDepartment() {
  yield takeEvery('ADD_DEPARTMENT', addDepartment);
}

/* UPDATING DEPARTMENT */

export function* updateDepartment(action) {
  try {
    const response = yield call(axios.put, `${DEPARTMENTS_URL}/${action.payload.id}`, { name: action.payload.name });
    yield put({ type: 'UPDATE_DEPARTMENT_SUCCESS', payload: response.data });
  } catch (e) {
    yield put({ type: 'UPDATE_DEPARTMENT_FAIL', payload: e.message });
  }
}

export function* watchUpdatingDepartment() {
  yield takeEvery('UPDATE_DEPARTMENT', updateDepartment);
}

/* REMOVING DEPARTMENT */

export function* removeDepartment(action) {
  try {
    yield call(axios.delete, `${DEPARTMENTS_URL}/${action.payload}`);
    yield put({ type: 'REMOVE_DEPARTMENT_SUCCESS', payload: action.payload });
  } catch (e) {
    yield put({ type: 'REMOVE_DEPARTMENT_FAIL', payload: e.message });
  }
}

export function* watchRemovingDepartment() {
  yield takeEvery('REMOVE_DEPARTMENT', removeDepartment);
}

