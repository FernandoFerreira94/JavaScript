// ---------- for ------------
for (let i = 0; i < 10; i++) {
  const par = i % 2 === 0;
  console.log(i, par);
}

const frutas = ["maça", "pera", "uva"];

for (let i = 0; i < frutas.length; i++) {
  if (frutas[i] == "maça") {
    frutas[i] = "banana";
  }
}
console.log(frutas);

//------------- for in ----------

let pessoas = {
  nome: "Ayumi",
  sobreNome: "Kawaguchi",
  idade: 21,
  endereco: {
    bairro: "Monte Castelo",
    apto: 96,
  },
};

for (const key in pessoas) {
  console.log(key, ":", pessoas[key]);
}

//--------------- for of -----------
let nome = "Tio Phil";

for (const valor of frutas) {
  console.log(valor);
}

frutas.forEach((key, i, array) => {
  if (key === "banana") {
    key = "tomate";
    console.log(i, key, array);
  }
});

let i = 0;
while (i < nome.length) {
  console.log(nome[i]);
  i++;
}

let numberRandom = (max) => {
  let random = Math.random() * max + 1;
  return Math.floor(random);
};

let rand = numberRandom(50);

while (rand != 10) {
  rand = numberRandom(50);
  //console.log(rand);
}

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//----- continue e break -----------
for (let i of number) {
  if (i === 5) {
    console.log(`Pulei o numero ${i}`);
    continue;
  }

  if (i === 8) {
    console.log(`parei no numero ${i}`);
    break;
  }
  console.log(i);
}
