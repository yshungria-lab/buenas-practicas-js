console.time('revisión');

let animales = ["perro", "gato", "pez"];

let listaAnimales = animales.join(", ");

let nuevaLista = animales.concat(",");

console.log(animales);
console.log(typeof animales);

console.log(listaAnimales);
console.log(typeof listaAnimales);

console.log(nuevaLista);
console.log(typeof nuevaLista);

console.timeEnd('revisión');