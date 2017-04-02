export const getDepartments = () => ({ type: 'GET_DEPARTMENTS' });

export const addDepartment = (name) => ({ type: 'ADD_DEPARTMENT', payload: name });

export const updateDepartment = (department) => ({ type: 'UPDATE_DEPARTMENT', payload: department });

export const removeDepartment = (id) => ({ type: 'REMOVE_DEPARTMENT', payload: id });

