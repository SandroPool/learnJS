const fher = {
  nombre: "Fernando",
  edad: 30,
  imprimir() {
    console.log(`nombre ${this.nombre} - edad ${this.edad}`);
  },
};

const pedro = {
  nombre: "Fernando",
  edad: 16,
  imprimir() {
    console.log(`nombre ${this.nombre} - edad ${this.edad}`);
  },
};

// fher.imprimir();

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.imprimir = function () {
    console.log(`nombre ${this.nombre} - edad ${this.edad}`);
  };
}

const maria = new Persona("Maria", 22);
const fernando = new Persona("Fernando", 19);

console.log(maria);
console.log(fernando);
maria.imprimir();
fernando.imprimir();
