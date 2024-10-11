let numberMain = (document.getElementById("numberMain").innerHTML = parseFloat(
  prompt("Digite seu numero")
));

let texto = document.getElementById("texto");

if (Number.isInteger(numberMain)) {
  texto.innerHTML += `<p>o numero ${numberMain} é inteiro? Sim </p>`;
} else {
  texto.innerHTML += `<p>O numero ${numberMain} é inteiro? Não</p>`;
}

texto.innerHTML += `<p>Raiz de ${numberMain} é ${numberMain ** 0.5} </p>`;

texto.innerHTML += `<p>valor arredondado para baixo é ${Math.floor(
  numberMain
)}</p>`;

texto.innerHTML += `<p>Valor arredondado para cima é ${Math.ceil(
  numberMain
)}</p>`;

texto.innerHTML += `<p>numero com 2 casa decimais ${numberMain.toFixed(2)}</p>`;
