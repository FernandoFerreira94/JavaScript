// ----------- Banco poupança --------
class ContaP {
  constructor(agencia, conta, saldo) {
    (this.agencia = agencia), (this.conta = conta), (this.saldo = saldo);
  }
}

// ---------- metodo sacar --------
ContaP.prototype.sacar = function (valor) {
  if (this.saldo >= valor) {
    this.saldo -= valor;
    this.verSaldo();
  } else {
    console.log(`Saldo insuficiente
seu saldo é: R$${this.saldo}`);
  }
};

// --------- metodo depositar
ContaP.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

// ------- metodo ver saldo ---------
ContaP.prototype.verSaldo = function () {
  let dados = `Agencia: ${this.agencia}
Conta: ${this.conta} 
Saldo: R$${this.saldo.toFixed(2)}`;
  return console.log(dados);
};

// ------------ conta Corrente -----------

class ContaC extends ContaP {
  constructor(agencia, conta, saldo, limite) {
    super(agencia, conta, saldo);
    this.limite = limite;
  }
}

// -------- metoo sacar com limite ---------

ContaC.prototype.sacarLimite = function (valor) {
  if (this.saldo + this.limite >= valor) {
    this.saldo -= valor;
    this.verSaldo();
  } else {
    console.log(`Saldo insuficiente
  seu saldo é: R$${this.saldo}`);
  }
};

// ----------- criando conta deposito
const cp = new ContaP(1001, 10115, 350);

// -------------- craindo conta corrente
const cc = new ContaC(2020, 31145, 630, 100);

// ---------- ação ----------

cp.sacar(120);
cp.depositar(30);

cc.sacarLimite(50);
cc.depositar(25);
cc.sacarLimite(239);
