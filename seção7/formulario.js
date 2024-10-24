class Cadastro {
  #senha;
  constructor() {
    (this.nome = document.getElementById("nome")),
      (this.sobrenome = document.getElementById("sobrenome")),
      (this.cpf = document.getElementById("cpf")),
      (this.usuario = document.getElementById("usuario")),
      (this.#senha = document.getElementById("senha"));
  }

  campoPrenchido() {
    if (
      this.nome.value !== "" &&
      this.sobrenome.value !== "" &&
      this.cpf.value !== "" &&
      this.usuario.value !== "" &&
      this.#senha.value !== ""
    ) {
      return true;
    } else {
      console.log("prencha o campso");
      console.log(this.usuario.value.length);
    }
  }

  usuarioLength() {
    if (this.usuario.value.length <= 12 && this.usuario.value.length >= 6)
      return true;
  }

  validar() {
    if (this.campoPrenchido() && this.usuarioLength()) {
      console.log("foi");
    } else {
      console.log("pencha o campo");
    }
  }
}

const cadastro = new Cadastro();
let nome = "fernando";
console.log(nome.length);
