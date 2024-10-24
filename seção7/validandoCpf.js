// -------- validando CPF -------

class ValidaCpf {
  constructor(cpf) {
    this.cpf = cpf;
    this.cpfLimpo = "";
  }

  get cpfString() {
    return (this.cpfLimpo = this.cpf.replace(/\D/g, ""));
  }

  limpaCpf() {
    this.cpfLimpo = this.cpf.replace(/\D/g, "");
    return parseInt(this.cpfLimpo);
  }

  get cpfOk() {
    return this.limpaCpf();
  }

  valida() {
    if (this.cpfString.length === 11 && typeof this.cpfOk === "number") {
      return console.log("validado");
    } else {
      console.log("erro");
    }
  }
}

const cpf = new ValidaCpf("454.184498-26");
cpf.valida();
