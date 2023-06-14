function saludar(nombre) {
  console.log(arguments);
  console.log("Hola ", nombre);
}

const saludar2 = function (nombre) {
  console.log("Hola", nombre);
};

const saludarFlecha = (_) => {
  console.log("Hola Flecha");
};

const saludarFlecha2 = (nombre) => {
  console.log("Hola ", nombre);
};

saludar("sandro".toLocaleUpperCase(), 20, true, "Perú");

saludarFlecha();
saludarFlecha2("firulays".toLocaleUpperCase());

const suma = (a, b) => a + b;
const getAleatorio = (_) => Math.random() + 1;
console.log(suma(6, 8));
console.log(getAleatorio());
