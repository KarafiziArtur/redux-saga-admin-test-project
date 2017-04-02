import { watchGettingDepartments, watchAddingDepartment, watchRemovingDepartment, watchUpdatingDepartment } from './departmentSagas';
import { watchGettingEmployees, watchAddingEmployee, watchUpdatingEmployee, watchRemovingEmployee } from './employeesSagas';

export default function* rootSaga() {
  yield [
    watchGettingDepartments(),
    watchAddingDepartment(),
    watchRemovingDepartment(),
    watchUpdatingDepartment(),
    watchGettingEmployees(),
    watchAddingEmployee(),
    watchUpdatingEmployee(),
    watchRemovingEmployee(),
  ];
}
