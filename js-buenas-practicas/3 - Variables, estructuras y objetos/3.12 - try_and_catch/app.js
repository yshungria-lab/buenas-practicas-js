"use strict"

let animales = ["perro", "gato", "pez "],
    totalAnimales = animales.length;

try {
    //Acciones a realizar por la excepción
    for (let i = 0; i <= totalAnimales; i++) {
        console.log([i]);
    }
} catch (e) {
    console.log("Esto es un error");
};