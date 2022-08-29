//For...in
//Cria um Loop em cima de um objeto

let student = {
    name: 'Thiago Garcia',
    age: 30,
    curse: 'ciencia da computação',
}

for (let property in student) {
    console.log(property);
    //console.log(student["name"]);
    console.log(student[property]);
}