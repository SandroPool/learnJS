class Rectangulo {
  #area = 0;
  #password = '';

  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
    console.log('My Password: ', this.#getPasswordPrivate);
  }

  get #getPasswordPrivate() {
    return this.#password + '\'7dsfasf\'' + Math.floor(Math.random() * 10) + 1;
  }

  get getArea(){
    return this.#calcularArea();
  }

  #calcularArea() {
    this.#area = this.base * this.altura;
    return this.#area;
  }
}

const rectangulo = new Rectangulo(10, 15);

console.log('Area: ',rectangulo.getArea);
