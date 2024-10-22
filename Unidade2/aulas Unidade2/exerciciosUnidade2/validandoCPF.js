// 454.184.498-26
// 460.058.170.20

//class CPF
class Cpf {
  constructor(cpf) {
    this.cpf = cpf;
  }
}

// Metodo limpaCpf
Cpf.prototype.limpaCpf = function () {
  this.cpf = this.cpf.replace(/\D/g, "");
  return parseInt(this.cpf);
};

// metodo validarCpf
Cpf.prototype.validaCpf = function () {
  if (
    this.limpaCpf() !== " " &&
    this.limpaCpf() !== undefined &&
    this.limpaCpf() !== null &&
    typeof this.limpaCpf() === "number" &&
    this.cpf.length === 11
  ) {
    console.log(this.cpf);
  } else {
    console.log("digite o cpf correto");
  }
};

const cpf1 = new Cpf("454.184.498-28");
console.log(cpf1.limpaCpf());
cpf1.validaCpf();
