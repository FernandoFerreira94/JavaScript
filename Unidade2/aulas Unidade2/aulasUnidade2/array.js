const nomes = ["Eduardo", "Maria", "Joana"];
// delete, ele deleta o valor no indice da variavel.
const nomeB = [...nomes];
delete nomes[1];
console.log(nomes); // (3) ['Eduardo', vazio, 'Joana']

// atribuindo o valor a outra variavel usando (...) para nao afeta a varivael orignal
// guarda o valor removido em uma variavel
const removido = nomeB.pop(); // Joana

// array.pop() = remove o ultimo indice
// array.shift() = remove o primeiro indice[0]
// array.push() = acrecenta no ultimo indice
// array.unshift() = acrecenta no primeiro indice[0]
// array.slice(1, 3) = retorna os valores do indice 1 ate o indice 2, nao retorna o indice 3

// ---------- SPLIT() / JOIN() ---------------
// string.split('valor a ser separado') = retorna a string em array
const split = "Fernando Pedro de Morais Ferreira";
const nomeSplit = split.split(" "); // (5) ['Fernando', 'Pedro', 'de', 'Morais', 'Ferreira']
// array.join('valor a ser ultilizando nos espaços') = retorna um array para string
const nomeJoin = nomeSplit.join(" "); // Fernando Pedro de Morais Ferreira
console.log(nomeJoin);

// ----------------- SPLICE() -----------------
const nomeSplice = ["fernando", "eduardo", "maria", "josue", "carlos"];
// array.splice(indice, delete, elem1, elem2, elem3) = indice(onde vai comecar) delete(quantos indice vai ser deletado parti do indice) elem1(acrecenta um elemene parti do indice)
const removidosSpice = nomeSplice.splice(2, 2, "Oliveira", "Ferreira"); // retorna os valores removido
console.log(nomeSplice); // (5) ['fernando', 'eduardo', 'Oliveira', 'Ferreira', 'carlos']
console.log(removidosSpice); //  ['maria', 'josue']

// ------------ CONCAT() --------------
const concatA1 = [1, 2, 3];
const concatA2 = [4, 5, 6];
const concatA3 = [7, 8, 9];
// array.concat(array a ser concatenado)
const concat1 = concatA1.concat(concatA2, concatA3); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat1);
// or
const concat2 = [...concatA1, ...concatA2, ...concatA3]; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat2);

// -------------- FILTER() -----------
// filtra array retorna oque foi filtrado
const arrayFilter = [5, 78, 57, 9, 65, 8, 15, 17, 1, 27, 99];
// array.filter((valor, indice, array) => {}) valor retorna os valores de cada indice / indice retorna o indice de cara valor / array retorna o array completo
const arrayFiltrados = arrayFilter.filter((valor, indice, array) => {
  return valor > 10 && valor < 30; // verifica valor maior que 10 e menor que 30
});
console.log(arrayFiltrados); // (3) [15, 17, 27]

const objFilter = [
  { nome: "Luiz", idade: 30 },
  { nome: "Oliva", idade: 25 },
  { nome: "jose", idade: 18 },
  { nome: "matheus", idade: 55 },
  { nome: "Fernando", idade: 26 },
  { nome: "ROmario", idade: 35 },
  { nome: "Ibraimovick", idade: 51 },
];

// retorna nome com 4 letras a mais
// retorna pessoa mais que 25 anos
// retorna pessoas que termina o nome com 'o'
const objFiltrado = objFilter.filter((valor, indice, array) => {
  return valor.nome.length > 4 && valor.idade > 25 && valor.nome.endsWith("o"); // matheus 55
});
console.log(objFiltrado); // nome: Fernando / Romario , idade: 26 35

// --------------- MAP() --------------
// array.map() modifica o array

// dobra o valor
const numeroMap = [5, 78, 57, 9, 65, 8, 15, 17, 1, 27, 99];
const numeroMapeado = numeroMap.map((valor, indice, array) => {
  return valor * 2;
});
console.log(numeroMapeado); // (11) [10, 156, 114, 18, 130, 16, 30, 34, 2, 54, 198]

// retorne apenas um string com o nome da pessoa
// remove chave nomes
// acrecente chave ID
const objMap = [
  { nome: "Luiz", idade: 30 },
  { nome: "Oliva", idade: 25 },
  { nome: "jose", idade: 18 },
  { nome: "matheus", idade: 55 },
  { nome: "Fernando", idade: 26 },
  { nome: "ROmario", idade: 35 },
  { nome: "Ibraimovick", idade: 51 },
];

const objNomes = objMap.map((valor, indice, array) => {
  return valor.nome;
});
const objIdade = objMap.map((valor, indice, array) => {
  return { idade: valor.idade };
});
const objId = objMap.map((valor, indice, array) => {
  valor.id = indice + 1;
  return valor;
});
console.log(objNomes);
console.table(objIdade);
console.table(objId);
console.table(objMap);
