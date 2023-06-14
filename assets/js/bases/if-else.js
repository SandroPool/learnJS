const hoy = new Date();
let dia = hoy.getDay();

console.log(dia);

if (dia === 5) {
  console.log("Viernes");
} else if (dia === 1) {
  console.log("Lunes");
  /* if (dia === 1) {
    console.log('Lunes');
  } */
} else if (dia === 2) {
  console.log("Martes");
} else {
  console.log("no es lunes martes o viernes");
}

dia = 300;

const diaLetras = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miercoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sabado",
};

const diaLetras2 = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado",];

console.log(diaLetras2[dia] || "Día no encontrado");
