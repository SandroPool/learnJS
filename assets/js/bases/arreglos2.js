let juegos = ["God Of War", "Mario", "Metroid", "Chromo"];

console.log("Largo: ", juegos.length);

let primero = juegos[juegos.length - juegos.length],
  ultimo = juegos[juegos.length - 1];

/* console.log({ primero, ultimo });

juegos.forEach((game, index, arr) => {
  console.log({ game, index, arr });
}); */

let nuevaLongitud = juegos.push("F-Zero");
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift("Fire Emblem");
console.log({ nuevaLongitud, juegos });

let juegoBorrado = juegos.pop();

console.log({ juegoBorrado, juegos });

let posicion = 2;

console.log(juegos);

let juegosBorrados = juegos.splice(posicion, 2);
console.log({ juegosBorrados, juegos });

let godOfWarIndex = juegos.indexOf("God Of War");
console.log({ godOfWarIndex });


