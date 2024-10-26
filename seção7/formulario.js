const cadastro = {
  nome: document.getElementById("nome"),
  sobrenome: document.getElementById("sobrenome"),
  cpf: document.getElementById("cpf"),
  cpfOk: "",
  usuario: document.getElementById("usuario"),
  senha: document.getElementById("senha"),
  string: /[^A-Za-z/s]/,
  stringNumber: /[^A-Za-z0-9/s]/,

  // verificar se os campos estao
  campoValidar() {
    if (
      this.nome.value !== "" &&
      this.sobrenome.value !== "" &&
      this.cpf.value !== "" &&
      this.usuario.value !== "" &&
      this.senha.value !== ""
    )
      return true;
  },

  // verificando nome se nao existe caracter nao alfanumerico
  verificarNome() {
    if (!this.string.test(this.nome.value) && !this.nome.value == "") {
      document.getElementById("smallNome").style.color = "green";
    } else {
      document.getElementById("smallNome").style.color = "red";
    }
  },

  // Verificar se nome e sobrenome contém apenas letras e sem espaços
  verificarSobrenome() {
    if (
      !this.string.test(this.sobrenome.value) &&
      !this.sobrenome.value == ""
    ) {
      document.getElementById("smallSobrenome").style.color = "green";
    } else {
      document.getElementById("smallSobrenome").style.color = "red";
    }
  },

  // verificando se cpf nao passa de 11 digitos
  verificarCpf() {
    this.cpfNumber();
    if (this.cpf.value !== "" && this.cpfNumber().toString().length <= 11) {
      document.getElementById("smallCpf").style.color = "green";
    } else {
      document.getElementById("smallCpf").style.color = "red";
    }
  },

  // verificar se usuario nao tem caracter nao alfanumerico
  verificarUsuario() {
    if (
      !this.usuario.value == "" &&
      !this.stringNumber.test(this.usuario.value)
    ) {
      document.getElementById("smallUsuario").style.color = "green";
      if (this.usuario.value.length >= 3 && this.usuario.value.length <= 12) {
        document.getElementById("smallUsuarioCar").style.color = "green";
      } else {
        document.getElementById("smallUsuarioCar").style.color = "red";
      }
    } else {
      document.getElementById("smallUsuarioCar").style.color = "red";
      document.getElementById("smallUsuario").style.color = "red";
    }
  },

  //verificar senha conter entre 6 á 12 caracter

  verificarSenha() {
    if (this.senha.value.length >= 6 && this.senha.value.length <= 12) {
      document.getElementById("smallSenha").style.color = "green";
    } else {
      document.getElementById("smallSenha").style.color = "red";
    }
  },

  // Nome e sobrenome apenas String
  nomeString() {
    const verificar = /^[A-Za-z]+$/;
    // remover espaços em branco
    this.nome.value = this.nome.value.replace(/\s+/g, "");
    this.sobrenome.value = this.sobrenome.value.replace(/\s+/g, "");
    if (verificar.test(this.nome.value) && verificar.test(this.sobrenome.value))
      return true;
  },

  // usuario precisa ter entre 3 á 12 caracter
  usuarioValidar() {
    // verificar se tem caracter nao alfanumerico
    const verificar = /[^A-Za-z0-9/s]/;
    // removendo todos espaços em branco
    this.usuario.value = this.usuario.value.replace(/\s+/g, "");
    if (
      this.usuario.value.length <= 12 &&
      this.usuario.value.length >= 3 &&
      !verificar.test(this.usuario.value)
    );
    return true;
  },

  // senha precisa ter enre 6 á 12 caracter
  senhaValidar() {
    if (this.senha.value.length <= 12 && this.senha.value.length >= 6)
      return true;
  },

  // cpf em string
  cpfString() {
    this.cpfOk = this.cpf.value.replace(/\D/g, "");
    return this.cpfOk;
  },

  // cpf em apenas Number
  cpfNumber() {
    return parseInt(this.cpfString());
  },

  // cpf precisa ser apenas numeros
  cpfValidar() {
    if (typeof this.cpfNumber() === "number" && this.cpfString().length === 11)
      return true;
  },

  // limpar campo de cadastro ao finalizar
  limparCampo() {
    this.nome.value = "";
    this.sobrenome.value = "";
    this.cpf.value = "";
    this.usuario.value = "";
    this.senha.value = "";
    let smallRed = document.querySelectorAll("small");
    smallRed.forEach((smallRed) => {
      smallRed.style.color = "red";
    });
  },

  // ver senha
  verSenha() {
    if (document.getElementById("senha").type === "password")
      return (document.getElementById("senha").type = "text");

    if (document.getElementById("senha").type === "text")
      return (document.getElementById("senha").type = "password");
  },

  // validar cadastro

  validar() {
    if (!this.nomeString()) {
      alert("Nome e sobrenome invalido");
      return;
    }

    if (!this.cpfValidar()) {
      alert("CPF invalido");
      return;
    }

    if (!this.usuarioValidar()) {
      alert("Usuário invalido");
      return;
    }

    if (!this.senhaValidar()) {
      alert("Senha invalida");
      return;
    }

    if (!this.campoValidar()) {
      alert("Preencha todos os campos");
      return;
    }

    alert("Cadastro feito com sucesso");
    this.limparCampo();
  },
};
