
const obtenerChiste = require("./library");

obtenerChiste().then(x => {
    console.log(x[0].setup);
    console.log(x[0].punchline);
});

obtenerChiste();
