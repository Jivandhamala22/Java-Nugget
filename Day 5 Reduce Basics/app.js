
const staff = [
    {name: 'aaa', age:20, position: 'intern', salary: 12000, vacancy: 4},
    {name: 'bbb', age:23, position: 'developer', salary: 45000, vacancy: 2},
    {name: 'ccc', age:45, position: 'manager', salary: 70000, vacancy: 1},
    {name: 'ddd', age:34, position: 'designer', salary: 43000, vacancy: 3},
    {name: 'eee', age:38, position: 'analyst', salary: 50000, vacancy: 5},
]


const minAge = staff.reduce((minage, employee)=> {
    
    //console.log(employee.age);
    
    return minage
}, {})

console.log(minAge);            