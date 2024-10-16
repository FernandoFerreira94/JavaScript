const calculadora = {
  display: document.getElementById("display"),

  clearDisplay() {
    this.display.value = "";
  },

  calcular(tipo, valor) {
    if (tipo === "acao") {
      if (valor === "/" || valor === "*" || valor === "-" || valor === "+") {
        this.display.value += valor;
      } else if (valor === "=") {
        const resultado = eval(this.display.value);
        this.display.value = resultado;
      }
    } else if (tipo === "valor") {
      this.display.value += valor;
    }
  },
};
