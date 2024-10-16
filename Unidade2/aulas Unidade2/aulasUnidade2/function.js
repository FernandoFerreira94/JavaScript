const funcao = function () {
  // se passar parametro arguments[i] iremos acessar os valores dos parametros passado quando chamar a função mesmo que nao declaramos antes na criação!
  console.log(arguments[0]);
};

funcao("Fernnado", 1, 3, "Hello", "casa", 12); // = 'Fernando'

const lista = function () {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  return total;
};

console.log(lista(1, 14, 8, 76, 5));

const soma = function (a, b = 20, c = 3) {
  console.log(a + b + c);
};
// passando undefined, a função recupera o valor atribuido no parametro da função
soma(3, undefined, 5); // 3 +20 +5 = 28

// pasando null a função interpreta o valor como 0
soma(6, null, 10); // 6 + 0 +10 = 16

//soma(5,,3) // erro!

// -------- Desustruturação Objeto---------

// passando parametro de objeto literal
const people = function ({ nome, sobreNome, idade, endereco }) {
  console.log(nome, sobreNome, idade, endereco);
};

people({
  nome: "Fernando",
  sobreNome: "Ferreira",
  idade: 30,
  endereco: { rua: "av JK", numero: 5430 },
}); // = Fernando Ferreira 30 {rua: 'av JK', numero: 5430}

// OR

let iAm = {
  nome: "Fabrina",
  sobreNome: "Morais",
  idade: 36,
  endereco: {
    rua: "av pico das agulhas negras",
    nuemro: 970,
  },
};

people(iAm); // = Fabrina Morais 36 {rua: 'av pico das agulhas negras', nuemro: 970}

// ---------- destruturação ARRAY -----------

const conta = function (operador, acumulador, ...numero) {
  console.log(operador, acumulador, numero);
  for (let num of numero) {
    switch (operador) {
      case "+":
        acumulador += num;
        break;

      case "-":
        acumulador -= num;
        break;

      case "*":
        acumulador *= num;
        break;

      case "/":
        acumulador /= num;
        break;

      default:
        console.log("adicione um operador");
        break;
    }
  }
  return console.log(acumulador);
};

conta("*", 1, 5, 7, 6, 5);

// ---------- retorno de function -------

function falaFrase(comeco) {
  function falaResto(falaResto) {
    return comeco + " " + falaResto;
  }
  return falaResto;
}
const hello = falaFrase("Ola");

console.log(hello("Mundo")); // = Ola Mundo

// ------------------------------------

function duplicar(n) {
  return n * 2;
}
function triplica(n) {
  return n * 3;
}
function quadriplica(n) {
  return n * 4;
}
console.log(duplicar(3));
console.log(triplica(3));
console.log(quadriplica(3));

//or

function criaMultiplicador(multiplica) {
  return function multiplicador(n) {
    return n * multiplica;
  };
}
console.log("###############");
const mult2 = criaMultiplicador(2);
const mult3 = criaMultiplicador(3);
const mult4 = criaMultiplicador(4);
console.log(mult2(3));
console.log(mult3(3));
console.log(mult4(3));

// ------------- função callBack --------

let timeRandom = (min = 1000, max = 4000) => {
  return parseInt(Math.random() * (max - min) + min);
};

function f1(callBack) {
  setTimeout(() => {
    console.log("f1");
    if (callBack) callBack();
  }, timeRandom());
}

function f2(callBack) {
  setTimeout(() => {
    console.log("f2");
    if (callBack) callBack();
  }, timeRandom());
}
function f3(callBack) {
  setTimeout(() => {
    console.log("f3");

    if (callBack) callBack();
  }, timeRandom());
}

// funçao de callback, uma função chama a outra e seguida!
f1(() => {
  f2(() => {
    f3(() => {
      console.log("hellos");
    });
  });
});

// or

/*
f1(f1callback);

function f1callback() {
  f2(f2callback);
}

function f2callback() {
  f3(f3calback);
}

function f3calback() {
  console.log("hello word");
}
*/

// ---------- function imediatas(IIFE) immedatel invoked function expression

// essa função nao interfere em valores no escopo global (função)(parametros)
(function (nome, sobrenome, idade) {
  function chamaNome(nome) {
    return nome;
  }

  function chamaSobrenome(sobrenome) {
    return sobrenome;
  }
  function chamaIdade(idade) {
    return idade;
  }

  console.log(
    `nome: ${chamaNome(nome)}, sobre Nome: ${chamaSobrenome(
      sobrenome
    )} e idade: ${chamaIdade(idade)}`
  );
})("Fernando", "Ferreira", 30);

// ------------- função fabrica (function factory) ---------

function criaPeope(nome, sobreNome, idade) {
  return {
    nome,
    sobreNome,
    idade,

    // usando get nao precisar chamar como função passando os '()'
    get nomeCompleto() {
      return `${this.nome} ${this.sobreNome}`;
    },

    set nomeCompleto(valor) {
      valor = valor.split(" ");
      console.log(valor);
      return valor;
    },

    falar(assunto) {
      console.log(
        `Eu ${this.nomeCompleto}, sou da familia ${this.nomeCompleto[4]}, e tenho ${this.idade} de idade, gosto de falar sobre ${assunto}`
      );
    },
  };
}

const p1 = criaPeope("Paulo", "Oliveira", 25);
console.log(p1.nomeCompleto);
p1.nomeCompleto = "Fernando PEdro de MOrasi Ferreira";
p1.falar("joga video game");
