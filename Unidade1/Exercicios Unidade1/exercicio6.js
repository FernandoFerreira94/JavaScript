// monte uma função que recebe 2 valor e retorne o maior

let num1 = parseInt(Math.random() * 15 + 1);
let num2 = parseInt(Math.random() * 15 + 1);

function maiorNum(x, y) {
  console.log(`x: ${x} / y: ${y}`);
  if (x > y) {
    return `x: ${x}`;
  }
  if (y > x) {
    return `y : ${y}`;
  }
}

function max(x, y) {
  if (x > y) return `x: ${x}`;
  return `y: ${y}`;
}

function maior(x, y) {
  return x > y ? `x: ${x}` : `y: ${y}`;
}

let maxMaior = (x, y) => (y > x ? `y: ${y}` : `x: ${x}`);

//console.log(maxMaior(num2, num1));

// criar uma função que retorne se a img e retrato ou paisagem

class img {
  constructor(largura, altura) {
    this.altura = altura;
    this.largura = largura;
  }
}
let IMG = [];
IMG.push(new img(0.85, 1.1));
IMG.push(new img(2.15, 1.15));
IMG.push(new img(1.75, 1.75));

let ePaisagem = (img) => {
  let result = "";
  for (let i = 0; i < IMG.length; i++) {
    if (img[i].largura > img[i].altura) {
      result += ` imagem${i} é paisagem\n `;
    } else if (img[i].largura === img[i].altura) {
      result += ` imagem${i} é quadrada\n `;
    } else {
      result += ` imagem${i} é retrato\n `;
    }
  }
  return result;
};
console.log(IMG);
console.log(ePaisagem(IMG));

// cria uma função que receba um numero e retorne se ele e divisivel por 3 ou 5.

let numero = parseInt(Math.random() * 100);
let cem = 100;

let divisor = (i) => {
  // Number.isInteger retorna se o parametro passado é um numero, se nao for e false
  Number.isInteger(i)
    ? i % 3 === 0 && i % 5 === 0
      ? console.log(i + " FizzBuzz")
      : i % 5 === 0
      ? console.log(i + " Buzz")
      : i % 3 === 0
      ? console.log(i + " Fizz")
      : console.log(i)
    : console.log("erro");
};

for (let i = 0; i <= cem; i++) {
  divisor(i);
}
