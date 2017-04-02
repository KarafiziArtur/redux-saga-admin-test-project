import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {formatEmployee} from '../helpers';

const EMPLOYEES_URL = 'http://localhost:3000/employees';

/* GETTING EMPLOYEES */

export function* getEmployees() {
  try {
    const response = yield call(axios.get, EMPLOYEES_URL);
    yield put({ type: 'GET_EMPLOYEES_SUCCESS', payload: response.data });
  } catch (e) {
    yield put({ type: 'GET_EMPLOYEES_FAIL', payload: e.message });
  }
}

export function* watchGettingEmployees() {
  yield takeEvery('GET_EMPLOYEES', getEmployees);
}

/* ADDING EMPLOYEE */

export function* addEmployee(action) {
  try {
    const employee = formatEmployee(action.payload);
    const response = yield call(axios.post, EMPLOYEES_URL, employee);
    yield put({ type: 'ADD_EMPLOYEE_SUCCESS', payload: response.data });
  } catch (e) {
    yield put({ type: 'ADD_EMPLOYEE_FAIL', payload: e.message });
  }
}

export function* watchAddingEmployee() {
  yield takeEvery('ADD_EMPLOYEE', addEmployee);
}

/* UPDATING EMPLOYEE */

export function* updateEmployee(action) {
  try {
    const employee = formatEmployee(action.payload);
    const response = yield call(axios.put, `${EMPLOYEES_URL}/${action.payload.id}`, employee);
    yield put({ type: 'UPDATE_EMPLOYEE_SUCCESS', payload: response.data });
  } catch (e) {
    yield put({ type: 'UPDATE_EMPLOYEE_FAIL', payload: e.message });
  }
}

export function* watchUpdatingEmployee() {
  yield takeEvery('UPDATE_EMPLOYEE', updateEmployee);
}

/* REMOVING EMPLOYEE */

export function* removeEmployee(action) {
  try {
    yield call(axios.delete, `${EMPLOYEES_URL}/${action.payload}`);
    yield put({ type: 'REMOVE_EMPLOYEE_SUCCESS', payload: action.payload });
  } catch (e) {
    yield put({ type: 'REMOVE_EMPLOYEE_FAIL', payload: e.message });
  }
}

export function* watchRemovingEmployee() {
  yield takeEvery('REMOVE_EMPLOYEE', removeEmployee);
}

