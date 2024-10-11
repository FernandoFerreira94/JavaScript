// criando class dos dados
class Dados {
  constructor(id, nome, sobreNome, peso, idade) {
    this.id = id;
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.peso = peso;
    this.idade = idade;
  }
}

let bancoDados = [];
let id = 1;
let envioDados = {
  enviar() {
    if (
      !document.getElementById("nome").value == "" &&
      !document.getElementById("sobreNome").value == "" &&
      !document.getElementById("peso").value == "" &&
      !document.getElementById("idade").value == ""
    ) {
      let dados = new Dados(
        id,
        document.getElementById("nome").value,
        document.getElementById("sobreNome").value,
        document.getElementById("peso").value,
        document.getElementById("idade").value
      );
      id++;
      bancoDados.push(dados);

      document.getElementById(
        "dadosRecuperados"
      ).innerHTML += `<p> Nome: ${dados.nome}</p>`;
      document.getElementById(
        "dadosRecuperados"
      ).innerHTML += `<p> sobreNome: ${dados.sobreNome}</p>`;
      document.getElementById(
        "dadosRecuperados"
      ).innerHTML += `<p> Peso: ${dados.peso}</p>`;
      document.getElementById(
        "dadosRecuperados"
      ).innerHTML += `<p> Idade: ${dados.idade}</p>`;
      document.getElementById(
        "dadosRecuperados"
      ).innerHTML += `<p>_____________________________</p>`;

      console.log(bancoDados);
    } else {
      alert("prencha todos os campos");
    }
  },
};
