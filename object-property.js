const student = [
    {id: 23, name: 'Alalia'},
    {id: 24, name: 'Dalia'},
    {id: 25, name: 'Malia'},
    {id: 26, name: 'Kalia'},
    {id: 27, name: 'Salia'},
    {id: 28, name: 'Zalia'}
]
const output = [];
for (var i = 0; i < student.length; i++){
    const element = student[i];
     result = element.name;
     output.push(result);
}
console.log(output);

const names = student.map(s => s.name);
console.log(names);
const ids = student.map(s => s.id);
console.log(ids);
const bigger = student.filter(s => s.id < 25);
console.log(bigger);


