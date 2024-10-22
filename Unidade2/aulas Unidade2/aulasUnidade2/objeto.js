//  -------object.defineProperty() ----- Object.defineProperties() -----

class Produto {
  constructor(nome, preco, estoque, pernas, cor) {
    (this.nome = nome), (this.preco = preco);

    // object.defineProperty() configura uma chave apenas;
    Object.defineProperty(this, "estoque", {
      enumerable: true, // faz que a chave seja criada
      value: estoque, // valor da chave
      writable: false, // false valor nao pode ser alterado, true o valor pode ser alterado
      configurable: true, //  true pode reconfigura a chave, false nao pode ser reconfigurada
    });

    // Object.defineProperties() cria diversas chaves.
    Object.defineProperties(this, {
      pernas: {
        enumerable: true,
        value: pernas,
        writable: false,
        configurable: true,
      },
      cor: {
        enumerable: true,
        value: cor,
      },
    });
  }
}
const cadeira = new Produto("cadeira", 55.3, 4, 4, "madeira");
console.log(cadeira);

// --------- metodos ----------

const mesa = new Produto("mesa", 20.5, 2, 4, "branca");
const mesaB = { ...mesa }; // copia o valor, porem nao modifica o valor original
mesaB.nome = "mesaB";
console.log(mesa);
console.log(mesaB);
Object.freeze(mesaB); // congela o objetc nao pode ser modificado
console.log(Object.keys(mesa)); // object,keys() = retorna as chaves do objeto formato de array
console.log(Object.values(mesa)); // object.value() = retorna apenas os valores do objeto formato de array

// -------- prototype -----------

class Pessoa {
  constructor(nome, sobrenome) {
    (this.nome = nome), (this.sobrenome = sobrenome);
    //(this.nomeCompleto = () => {
    //  return `${this.nome} ${this.sobrenome}.`;
    // });
  }
}
// object.prototype. cria função ou chave valor que fica guardado no __proto__
Pessoa.prototype.aqui = "here";

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}.`;
};

const pessoa1 = new Pessoa("Fernando", "Ferreira");
console.log(pessoa1.nomeCompleto());
console.log(pessoa1);

// ---------- manipulando Object ----------

const objA = {
  chave: "A",
};
objA.__proto__.aqui = "here";
console.log(objA.aqui);

class ProdutoA {
  constructor(nome, preco) {
    (this.nome = nome), (this.preco = preco);
  }
}

ProdutoA.prototype.desconto = function (desconto) {
  this.preco -= (this.preco / 100) * desconto;
  return this.preco;
};

const geladeira = new ProdutoA("geladeira", 1500);
console.log(geladeira.desconto(21));

// ----------- herança ----------

class ProdutoFrejan {
  constructor(nome, preco, estoque) {
    (this.nome = nome), (this.preco = preco), (this.estoque = estoque);
  }
}

class Camiseta extends ProdutoFrejan {
  constructor(nome, preco, estoque, cor, tecido) {
    super(nome, preco, estoque), (this.cor = cor), (this.tecido = tecido);
  }
}

class Caneca extends ProdutoFrejan {
  constructor(nome, preco, estoque, material, quantidade) {
    super(nome, preco, estoque),
      (this.material = material),
      (this.quantidade = quantidade);
  }
}

ProdutoFrejan.prototype.aumento = function (valor) {
  this.preco += (this.preco / 100) * valor;
  return this.preco.toFixed(2);
};
ProdutoFrejan.prototype.desconto = function (valor) {
  this.preco -= (this.preco / 100) * valor;
  return this.preco.toFixed(2);
};

const camiseta = new Camiseta("hurley", 85.8, 4, "branca", "nylion");
console.log(camiseta);

const caneca = new Caneca("xicara", 13.9, 26, "porcelana", "250ml");
caneca.desconto(20);
console.log(caneca);
