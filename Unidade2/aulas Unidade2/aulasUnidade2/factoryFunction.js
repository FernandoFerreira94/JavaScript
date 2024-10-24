/*
const speak = {
  speak() {
    console.log(`${this.nome} esta speaking`);
  },
};
const eat = {
  eat() {
    console.log(`${this.nome} esta eating`);
  },
};
const drink = {
  drink() {
    console.log(`${this.nome} esta drinking`);
  },
};
const prototypePessoa = { ...speak, ...eat, ...drink };
*/
// or

const prototypePessoa = {
  speak() {
    console.log("hello");
  },
  drink() {
    console.log("bebendo");
  },
  eat() {
    console.log("comendo");
  },
};

const criaPessoa = function (nome, sobrenome) {
  // criando um Objeto ja com prototype!
  return Object.create(prototypePessoa, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
};

const p2 = criaPessoa("Fernando", "Ferreira");
console.log(p2);
p2.speak();
