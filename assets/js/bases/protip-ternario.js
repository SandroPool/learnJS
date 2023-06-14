const elMayor = (a, b) => (a > b ? a : b),
  tieneMembresia = (miembro) => (miembro ? "2 dólares" : "10 dólares");

console.log(elMayor(4.5, 99));
console.log(tieneMembresia(false));

const amigo = false,
  amigosArr = [
    "Peter",
    "Tony",
    "Dr. Strange",
    amigo ? "Thor" : "Loki",
    elMayor(45, 55),
  ];

console.log({ amigosArr });


const nota = 100,
    grado = nota >= 95 ? 'A+':
            nota >= 90 ? 'A':
            nota >= 85 ? 'B+':
            nota >= 80 ? 'B':
            nota >= 75 ? 'C+':
            nota >= 70 ? 'C': 'F';
            
console.log({nota, grado});