let personaje = {
  nombre: "Tony Stark",
  codeName: "Iron Man",
  vivo: false,
  edad: 40,
  coords: {
    lat: 354.54,
    lng: -1189.8,
  },
  trajes: ["Mark 1", "Mark 5", "Hulk buster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, California",
  },
  "ultima-pelicula": "End Game",
};

// console.log(personaje);
console.log("Nombre: ", personaje.nombre);
console.log("Nombre: ", personaje["nombre"]);
console.log("Edad: ", personaje.edad);
console.log("Coords: ", personaje.coords);
console.log("Lat: ", personaje.coords.lat);

console.log("N° Trajes:", personaje.trajes.length);
console.log("Último Traje: ", personaje.trajes[personaje.trajes.length - 1]);

const x = "vivo";

console.log("Vivo", personaje[x]);

console.log("Última Pelicula ", personaje["ultima-pelicula"]);

//Más detalles

delete personaje["ultima-pelicula"];

const entriesPares = Object.entries(personaje);

console.log(entriesPares);

personaje.casado = true;

console.log(personaje);

Object.freeze(personaje);

personaje.dinero = 199846569784567897;
personaje.casado = false;

let propiedades = Object.getOwnPropertyNames(personaje),
  valores = Object.values(personaje);

console.log({propiedades, valores});


