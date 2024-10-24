const pessoas = [
  { id: 3, nome: "Fernando" },
  { id: 2, nome: "maria" },
  { id: 1, nome: "Joao" },
];

/*
const novasPEssoas = {};
for (const { id, nome } of pessoas) {
  novasPEssoas[id] = { id, nome };
}
console.log(novasPEssoas);
*/

const novasPEssoas = new Map();

for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPEssoas.set(id, { ...pessoa });
}
//novasPEssoas.set(id, { id, nome });
console.log(novasPEssoas.get(3));
