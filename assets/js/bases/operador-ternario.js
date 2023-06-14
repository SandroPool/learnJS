const dia = 5,
  horaActual = 10;

let horaApertura, mensaje;

/* if ([0,6].includes(dia)) {
  console.log("Fin de semana");
  horaApertura = 9;
} else {
  console.log("Día de semana");
  horaApertura = 11;
}
 */

horaApertura = [0, 6].includes(dia)
  ? (console.log("Fin de semana"), 9)
  : (console.log("Dia de semana"), 11);

/* if (horaActual >= horaApertura) {
  mensaje = "Está abierto Bienvenido";
} else {
  mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
}

 */

mensaje =
  horaActual >= horaApertura
    ? "Está abierto Bienvenido "
    : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje });
