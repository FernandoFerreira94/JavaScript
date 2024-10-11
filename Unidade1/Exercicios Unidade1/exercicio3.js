class Dados {
  constructor(peso, altura) {
    this.peso = peso;
    this.altura = altura;
  }
}

const resultado = document.querySelector("#resultado");
const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");

let imc = {
  texto(msg, result) {
    return (resultado.innerHTML = `<h3>Resultado</h3>
                  <p>Seu IMC é: ${result} ( ${
      document.getElementById(msg).innerHTML
    } )</p>`);
  },

  resultado() {
    let dados = new Dados(peso.value, altura.value);

    if (!altura.value == "" && !peso.value == "") {
      //isNan retorna se o valor é string(usando ! para mudar o retorno)
      if (!isNaN(dados.peso) && !isNaN(dados.altura)) {
        let result = dados.peso / (dados.altura * dados.altura);
        result.toFixed(2);
        resultado.innerHTML = "";
        if (result >= 39.9) {
          return imc.texto("og3", result.toFixed(2));
        }
        if (result >= 34.9) {
          return imc.texto("og2", result.toFixed(2));
        }
        if (result >= 29.9) {
          return imc.texto("og1", result.toFixed(2));
        }
        if (result >= 24.9) {
          return imc.texto("sobrepeso", result.toFixed(2));
        }
        if (result >= 18.5 && result < 39.9) {
          return imc.texto("normal", result.toFixed(2));
        }
        if (result < 18.5) {
          return imc.texto("abaixo", result.toFixed(2));
        }
        // ----------------//---------//
      } else {
        alert("prenche com numeros");
      }
    } else {
      alert("prenche todos os campos");
    }

    document.querySelector("#peso").value = "";
    document.querySelector("#altura").value = "";
  },
};
