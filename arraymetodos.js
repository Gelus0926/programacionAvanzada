let numeros = [-3,200,60,2.5]

//Agregar un nuevo elemento al arreglo 
//PUSH
numeros.push(20)
console.log(numeros)

//Recorriendo un arreglo
numeros.forEach((numero)=>console.log(numero));

//Filtrar el arreglo
let filtro=numeros.filter(numero => numero>=50)

console.log(filtro)


//Buscar elemento en un array
let buscar = numeros.find(function (numero){
    return(numero > 50);
});
console.log(buscar);

//Buscar elemento de otra manera 
let ubicado=numeros.some(function (numero){
    return(numero==1000)
})
console.log(ubicado)

//Recorriendo y modificando arreglos al mismo tiempo 
let mapa=numeros.map(function(numero){
    return numero=numero+1
})
console.log(mapa)
