const carros = ["Ford", "Mazda", "Honda", "Toyota"];

console.log("While");
let i = 0;

while (i < carros.length) {
  console.log(carros[i]);
  i++;
}

console.log("Do While");

let j = 0;

do {
  console.log(carros[j]);
  j++;
} while (carros[j]);
