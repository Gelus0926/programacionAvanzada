let peliculas=[
    {nombre:'Harry Potter', genero:'Ciencia Ficcion', costo: 2000},
    {nombre:'Dragon Ball', genero:'Anime', costo: 3000},
    {nombre:'Animales fantasticos', genero:'Ciencia Ficcion', costo: 5000},
    {nombre:'Masacre en texas', genero:'Suspenso', costo: 1000},
    {nombre:'Mi vecino Totoro', genero:'Anime', costo: 3000}

]
//Filtrar las peliculas de anime y mostrar si hay alguna pelicula de anime que cueste 3000
let filtro3=peliculas.filter(pelicula => pelicula.genero=="Anime");
let busqueda = filtro3.filter(busco=>busco.costo==3000) 
console.log(busqueda);

/*let filtro=peliculas.filter(pelicula => pelicula.genero=="Ciencia Ficcion")
console.log(filtro)

let filtro2=peliculas.filter(pelicula => pelicula.costo > 2000)
console.log(filtro2)*/

//Transformar todos los costo quitandole los miles 
let mapa=peliculas.map(function(pelicula){
    return pelicula.costo/1000
})
console.log(peliculas)

//Todas las peliculas tengan mi nombre 
let mapa1=peliculas.map(function(pelicula){
    return pelicula.nombre = "Mateo"
})
console.log(peliculas)
