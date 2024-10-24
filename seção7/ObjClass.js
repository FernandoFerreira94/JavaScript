// ---------- get / set ------------
const _velocidade = Symbol("velocidade");
class Carro {
  #velocidade;
  constructor(nome) {
    this.nome = nome;
    this.#velocidade = 0;
  }

  set velocidade(valor) {
    if (typeof valor === "number") {
      if (valor <= 120 && valor >= 0) {
        this.#velocidade = valor;
      }
    }
  }

  get velocidade() {
    console.log(this.#velocidade);
    return this.#velocidade;
  }

  acelerar() {
    if (this.#velocidade >= 120) return;
    this.#velocidade++;
    console.log(this.#velocidade);
    this.acelerar();
  }

  freiar() {
    if (this.#velocidade <= 0) return;
    this.#velocidade--;
    console.log(this.#velocidade);
    this.freiar();
  }
}

const monza = new Carro("Monza");
monza.velocidade = 50;
console.log(monza.nome);

// ---------------- pessoa ----------

class Pessoa {
  #nome;
  constructor(nome, sobrenome) {
    this.#nome = nome;
    this.sobrenome = sobrenome;
  }

  set nomeCompleto(valor) {
    if (typeof valor === "string") return (this.#nome = valor);
  }

  get nomeCompleto() {
    return `${this.#nome} ${this.sobrenome}`;
  }
}

const p1 = new Pessoa("Fernando", "Ferreira");
p1.nomeCompleto = "Marcos";
console.log(p1.nomeCompleto);

// ----------- herença ----------

class Eletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado === false) {
      return (this.ligado = true), console.log(this.ligado);
    } else {
      console.log("tv ja esta ligada");
    }
  }

  desligar() {
    if (this.ligado === true) {
      return (this.ligado = false), console.log(this.ligado);
    } else {
      console.log("tv ja esta desligada");
    }
  }
}

class SmartPhone extends Eletronico {
  constructor(nome, marca, modelo) {
    super(nome);
    this.marca = marca;
    this.modelo = modelo;
  }
}

// --------- criando obj ---------

const tv = new Eletronico("TV");
const apple = new SmartPhone("Iphone", "Apple", "Iphone 16 pro");
console.log(apple);
tv.ligar();
tv.ligar();

// ----------- metodo de instancia estaticos ---------

class Controle {
  constructor(marca) {
    this.marca = marca;
    this.volume = 0;
  }

  aumentar() {
    if (this.volume <= 15) {
      this.volume += 2;
      console.log(this.volume);
    }
  }

  baixar() {
    if (this.volume >= 0) {
      this.volume -= 2;
      console.log(this.volume);
    }
  }
}

const philip = new Controle("philip");
