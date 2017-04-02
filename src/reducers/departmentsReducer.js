import {sortingById} from '../helpers';

const initialState = [];

const departments = (departments = initialState, action) => {
  switch (action.type) {
    case 'GET_DEPARTMENTS_SUCCESS':
      return [...departments, ...action.payload].sort(sortingById);
    case 'GET_DEPARTMENTS_FAIL':
      return { error: action.payload };
    case 'ADD_DEPARTMENT_SUCCESS':
      return [...departments, action.payload].sort(sortingById);
    case 'ADD_DEPARTMENT_FAIL':
      return { error: action.payload };
    case 'UPDATE_DEPARTMENT_SUCCESS':
      let filteredDepartments = [...departments];
      filteredDepartments = filteredDepartments.filter(department => department.id !== action.payload.id);
      filteredDepartments.push(action.payload);
      return [...filteredDepartments].sort(sortingById);
    case 'UPDATE_DEPARTMENT_FAIL':
      return { error: action.payload };
    case 'REMOVE_DEPARTMENT_SUCCESS':
      let newDepartments = [...departments];
      newDepartments = newDepartments.filter(department => department.id !== action.payload);
      return [...newDepartments ].sort(sortingById);
    case 'REMOVE_DEPARTMENT_FAIL':
      return { error: action.payload };
    default:
      return departments.sort(sortingById);
  }
};

export default departments;

