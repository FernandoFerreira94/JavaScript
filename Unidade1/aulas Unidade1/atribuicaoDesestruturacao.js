let a = "A";
let b = "B";
let c = "C";

[a, b, c] = [1, 2, 3];

//console.log(a, b, c);

let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numero.push("Fernando");

// suando virgula sem variavel pula o indice!
let [primeiro, , segundo, ...resto] = numero;

console.log(primeiro, segundo); // [1],[3]
// guardo o resto dos valores de numero
console.log(resto);

const lista = [
  ["du", "edu", "dudu"],
  ["maria", "mar", "marico"],
  ["fer", "nando", "fernando"],
];

const [, , [, nando]] = lista;

console.table(lista);

console.table(nando); // lista[2][1]

/*
let people = {
  nome: "Luiz",
  sobreNome: "Oliveira",
  idade: 30,
  endereço: {
    rua: "JK",
    numero: 5430,
    apto: 96,
  },
};

const { sobreNome: lastName } = people;

const {
  endereço: { rua: av, apto },
} = people;

console.log(people);
console.log(lastName, av, apto);
*/
