import {combineReducers} from 'redux';

import departments from './departmentsReducer';
import employees from './employeesReducer';

const rootReducer = combineReducers({
  departments,
  employees
});

export default rootReducer;