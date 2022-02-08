let employee = [
    {
    "id": "1",
    "firstName": "Tom",
    "lastName": "Cruise",
    "salary":15000
    },
    {
    "id": "2",
    "firstName": "Maria",
    "lastName": "Sharapova",
    "salary":13000
    },
    {
    "id": "3",
    "firstName": "James",
    "lastName": "Bond",
    "salary":9000
    },
    {
    "id": "4",
    "firstName": "Homs",
    "lastName": "Mruise",
    
    "salary":25000
    },
    {
    "id": "5",
    "firstName": "Karia",
    "lastName": "Dharapova",
    "salary":23000
    },
    {
    "id": "6",
    "firstName": "Kames",
    "lastName": "Lond",
    "salary":19000
    }
];
//20% tsalin nem

let map1 = employee.map(newSalary => newSalary.salary + newSalary.salary * 0.2);
console.log(map1);