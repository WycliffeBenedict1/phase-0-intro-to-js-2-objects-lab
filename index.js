// Write your solution in this file!
const employee = {
    name: "Job",
    streetAdress: "KisumuRoad"
};

function updateEmployeeWithKeyAndValue(employee, key, value){
  return {
    ...employee,
    [key]: value
  }
 const newemployee = [ ...employee ];}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};

    delete newEmployee[key];
    
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(emlopyee, key) {
    delete employee[key];
    
    return employee
}