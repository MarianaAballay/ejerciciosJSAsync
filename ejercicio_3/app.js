
const obtenerPokemon = require("./library");

function recibirPokemon(pokemon) {
    console.log("Nombre: " + pokemon.name);
    
    console.log("Habilidades: ");
    pokemon.abilities.forEach(habilidad => console.log(habilidad.ability.name));
}

// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon("pikachu", recibirPokemon);
