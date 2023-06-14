const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona("Sandro", "Castro Paredes");

console.log(persona);

function imprimeArgumentos() {
  console.log(arguments);
}

const imprimeArgumentos2 = (...args) => {
  return args;
};

imprimeArgumentos();

imprimeArgumentos2("sape", "hola", 78, true, false);

const [mensaje, saludo, estado, casado, saldo] = imprimeArgumentos2(
  "Bienvenido",
  "Hola",
  false,
  true,
  1000
);

console.log({ mensaje, saludo, estado, casado, saldo });

const { nombre: nuevoNombre, apellido } = crearPersona(
  "Sandro",
  "Castro Paredes"
);

console.log({ nuevoNombre, apellido });

const tony = {
  nombre: "Tony Stark",
  codeName: "IronMan",
  vivo: false,
  edad: 40,
  trajes: ["Mark 1", "Mark 2", "Hulk Buster"],
};

const imprimePropiedades = ({ nombre, codeName, vivo, edad=15, trajes }) => {
  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};

imprimePropiedades(tony);
