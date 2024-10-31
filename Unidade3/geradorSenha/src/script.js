// gerador de cpf
// selecioandno o campo display
const displayCpf = document.getElementById("geracpf");

// função gerar 9dig
let cpfSemDig = (max = 999999999, min = 100000000) => {
  return String(Math.floor(Math.random() * (max - min) + min));
};

// função gerar 2dig
let gerarDig = () => {
  let dig1 = cpfSemDig(1, 10);
  let dig2 = cpfSemDig(1, 10);
  let dig = "";
  return (dig = dig1 + dig2);
};

// construindo o cpf
let stringCpf = () => {
  const cpf1 = cpfSemDig().slice(0, 3) + ".";
  const cpf2 = cpfSemDig().slice(3, 6) + ".";
  const cpf3 = cpfSemDig().slice(6, 9) + "-";
  const cpf = cpf1 + cpf2 + cpf3 + gerarDig();
  return (displayCpf.innerHTML = cpf);
};

// ================================ gerador de senha
// site codigo https://pt.wikipedia.org/wiki/ASCII
// selecionando o campo display
const campo = document.getElementById("senha");
const qtdNum = document.getElementById("qtdNum");

// selecioando os id dos inputs
const maiuscula = document.getElementById("max");
const numero = document.getElementById("num");
const simbolo = document.getElementById("sim");
const minuscula = document.getElementById("min");

// gerador de numero aleatorio
const gerardor = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min);
};

// gerador de simbolos
const geraSimbolo = () => {
  let simboloString = "!@#$%¨&*()_+-?|/;}^{][`+-=";
  return simboloString[gerardor(0, simboloString.length)];
};

// aplicando a funçao para recuperar valor dos codigos com a função gerdaor()
const num = () => String.fromCharCode(gerardor(58, 48));
const max = () => String.fromCharCode(gerardor(91, 65));
const min = () => String.fromCharCode(gerardor(123, 97));

// função final de gerar a senha.
function gerarSenha(qtd, maiuscula, numero, simbolo, minuscula) {
  const senhaArry = [];
  qtd = Number(qtd);
  if (qtd != 0 && qtd >= 5) {
    for (let i = 0; i < qtd; i++) {
      maiuscula && senhaArry.push(max());
      numero && senhaArry.push(num());
      minuscula && senhaArry.push(min());
      simbolo && senhaArry.push(geraSimbolo());
    }
    // zerando value qtdNum
    qtdNum.value = "";
    //join deixa as string juntas
    //slice retorna do indice 0 ate o indice pedido na qtd
    senhaArry.join("").slice(0, qtd);
    campo.style.color = "green";
    return (campo.innerHTML = senhaArry.join("").slice(0, qtd));
  } else {
    campo.innerHTML = "Quantidade minima de caracter 5";
    campo.style.color = "red";
  }

  qtdNum.value = "";
}
