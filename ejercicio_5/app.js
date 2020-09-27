
const obtenerPersonaFake = require("./library");

function recibirPersona(persona){

persona.results.forEach(element => {
    //console.log(element.location);
    //console.log(element);
    console.log("Nombre: " +element.name.first);
    console.log("Apellido: " +element.name.last);
    console.log("Domicilio: " +element.location.country + ", " + element.location.state + 
    ", " + element.location.city + ", " +element.location.street.name + " " + element.location.street.number
    + ", " + element.location.postcode );
    console.log("Email: " +element.email);
    console.log("Usuario: " +element.login.username + " y contraseña: " + element.login.password);
});
    
}

// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(recibirPersona);

// 5- Imprimir por consola los siguientes datos de la persona extraida usando Callbacks:
//Nombre
//Genero
//Pais, Estado, Ciudad, Calle, Nro, Código Postal
//Email
//Nombre de usuario
//Password
