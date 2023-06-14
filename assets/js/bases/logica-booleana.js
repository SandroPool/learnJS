console.log(!true);
console.log(!false);

const retornaFalse = () => false,
  retornaTrue = () => true;

let soyNull = null,
  soyUndefined = undefined;

let a1 = soyNull && soyUndefined && "Hola Soy A1",
  a2 = soyNull || soyUndefined || "Hola Soy A1";

console.log({ a1 });
console.log({ a2 });

if (retornaTrue() && retornaFalse() || true || false || true) {
  console.log("Logica Booleana");
}
