import {sortingById} from '../helpers';

const initialState = [];

const employees = (employees = initialState, action) => {
  switch (action.type) {
    case 'GET_EMPLOYEES_SUCCESS':
      return [...employees, ...action.payload].sort(sortingById);
    case 'GET_EMPLOYEES_FAIL':
      return { error: action.payload };
    case 'ADD_EMPLOYEE_SUCCESS':
      return [...employees, action.payload].sort(sortingById);
    case 'ADD_EMPLOYEE_FAIL':
      return { error: action.payload };
    case 'UPDATE_EMPLOYEE_SUCCESS':
      console.log('action.payload', action.payload);
      let filteredEmployees = [...employees];
      filteredEmployees = filteredEmployees.filter(employee => employee.id !== action.payload.id);
      filteredEmployees.push(action.payload);
      console.log('filteredEmployees', filteredEmployees);
      return [...filteredEmployees].sort(sortingById);
    case 'UPDATE_EMPLOYEE_FAIL':
      return { error: action.payload };
    case 'REMOVE_EMPLOYEE_SUCCESS':
      let newEmployees = [...employees];
      newEmployees = newEmployees.filter(employee => employee.id !== action.payload);
      return [...newEmployees ].sort(sortingById);
    case 'REMOVE_EMPLOYEE_FAIL':
      return { error: action.payload };
    default:
      return employees.sort(sortingById);
  }
};

export default employees;
