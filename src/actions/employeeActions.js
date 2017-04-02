export const getEmployees = () => ({ type: 'GET_EMPLOYEES' });

export const addEmployee = (employee) => ({ type: 'ADD_EMPLOYEE', payload: employee });

export const updateEmployee = (employee) => ({ type: 'UPDATE_EMPLOYEE', payload: employee });

export const removeEmployee = (id) => ({ type: 'REMOVE_EMPLOYEE', payload: id });

