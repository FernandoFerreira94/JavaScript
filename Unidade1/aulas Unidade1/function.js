const people = {
  nome: "Fernando",
  sobreNome: "Ferreira",
  idade: 30,

  fala() {
    return `${this.nome} ${this.sobreNome}, esta dizendo "hello word"`;
  },

  incrementarIdade() {
    return `${this.fala()} e ele tem ${this.idade} year old`;
  },
};

console.log(people.incrementarIdade());
