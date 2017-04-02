export const sortingById = (a, b) => {
  return a.id > b.id;
};

export const formatEmployee = (employee) => ({
    first_name: employee.first_name,
    last_name: employee.last_name,
    department_id: +employee.department_id
});
