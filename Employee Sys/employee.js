function Employee(id,name,department,salary){
    this.id=id;
    this.name=name;
    this.department=department;
    this.salary=salary;
}

const Employees=[];

//add Employee
function addEmployee(id,name,department,salary){
    Employees[id]=new Employee(id,name,department,salary);
    console.log(`Employee ${id} added successfully.`);
}

//get all employees
function getAllEmployees(){
    const allEmployees=Object.values(Employees);
    console.log("All Employees:");
    console.log("ID | Name | Department | Salary"); 
    allEmployees.forEach(employee => {
        console.log(`${employee.id} | ${employee.name} | ${employee.department} | ${employee.salary}`);
    });
}


//get employee by id
function getEmployeeById(id){
    const employee=Employees[id];
    if(employee){
        console.log(`Employee found: ${employee.id} | ${employee.name} | ${employee.department} | ${employee.salary}`);
    } else {
        console.log(`Employee with ID ${id} not found.`);
    }
    return employee;
}

addEmployee(1,"John Doe","HR",50000);
addEmployee(2,"Jane Smith","IT",60000);
addEmployee(3,"Alice Johnson","Finance",55000);
console.log('    ');
getAllEmployees();
console.log('    ');
getEmployeeById(2);