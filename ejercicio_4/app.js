
const obtenerPokemon = require("./library");

obtenerPokemon("pikachu").then(x => {
    console.log("Nombre: " +x.name);
    console.log("Habilidades: ");
    x.abilities.forEach(habilidad => console.log(habilidad.ability.name));
});
// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido

