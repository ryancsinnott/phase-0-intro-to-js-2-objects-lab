const employee = {
    name: "Ryan",
    streetAddress: "133 Broadway",
  };

  function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const newEmployee = {...employee}

    newEmployee[name] = streetAddress;
    
    return newEmployee;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee[name] = streetAddress

    return employee;
  }

  function deleteFromEmployeeByKey(...name) {
    const employee = {...name}
    return employee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, name, streetAddress){
    employee[name] = streetAddress

    return employee;
  }