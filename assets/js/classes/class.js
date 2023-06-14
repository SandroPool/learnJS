class Persona {

  static _conteo = 0;

  static get conteo(){
    return Persona._conteo+' instances ';
  }

  static mensaje(){
    console.log(this.nombre);
    console.log(Persona._conteo,'Hola Mundo Método Éstatico');
  }

  nombre = '';
  codigo = '';
  frase = '';
  comida = '';

  constructor(nombre = 'Sin Nombre',codigo = 'Sin codigo',frase = 'Sin Frase') {
    this.codigo = codigo;
    this.nombre = nombre;
    this.frase = frase;
    Persona._conteo++;
  }

  set setComidaFavorita(comida){
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita(){
    return `La comida favorita de ${this.nombre} es:  ${this.comida}`;
  }

  quienSoy() {
    console.log(`Soy  ${this.nombre} y mi identidad es ${this.codigo}`);
  }
  miFrase() {
    this.quienSoy();
    console.log(`${this.codigo} digo:  ${this.frase}`);
  }
}

const spiderman = new Persona('Peter Parker', 'SpiderMan', 'Soy tu amigable vecino spiderman'),
      ironman = new Persona('Tony Start', 'IronMan', 'Yo Soy Iron Man');

console.log(spiderman);
spiderman.setComidaFavorita = 'Hamburguesa';
console.log(spiderman.getComidaFavorita);


console.log(Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();
