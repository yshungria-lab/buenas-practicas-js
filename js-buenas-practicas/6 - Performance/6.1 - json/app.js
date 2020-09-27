// $.getJSON("productos.json", function(productos) {
//     //console.log(productos);

//     let totalProductos = productos.length;
//     for (let i = 0; i < totalProductos; i++) {

//         console.log(productos[i].nombre)

//     };
// })




//$.getJSON("productos.json", function(productos){
let url = "https://json-ld.org/contexts/person.jsonld";
$.getJSON(url, function(productos) {
    console.log(productos);

    // let totalProductos = productos.length;
    // console.log(totalProductos)

    // for (let i = 0; i < totalProductos; i++) {
    //     console.log(productos[i].nombre);
    // };

})