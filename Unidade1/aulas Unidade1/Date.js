// data em formato de string

const data = new Date();
let formataData = {
  formata() {
    const data = new Date();
    let day = data.getDate() >= 10 ? data.getDate() : `0${data.getDate()}`;
    let month = data.getMonth() + 1;
    let year = data.getFullYear();
    let hours = data.getHours() >= 10 ? data.getHours() : `0${data.getHours()}`;

    let minutes =
      data.getMinutes() >= 10 ? data.getMinutes() : `0${data.getMinutes()}`;

    let segundos =
      data.getSeconds() >= 10 ? data.getSeconds() : `0${data.getSeconds()}`;

    return `${day}/${month}/${year} - ${hours}:${minutes}:${segundos}`;
  },

  tabela() {
    document.getElementById("tempo").innerHTML = formataData.formata();
  },
};

setInterval(formataData.tabela, 1000);

formataData.tabela();

let falarDia = {
  week: [
    "Domingo",
    "Segunda-feira",
    "terca-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sabado",
  ],
};

switch (data.getDay()) {
  case 0:
    console.log(`Hoje é ${falarDia.week[0]}`);
    break;
  case 1:
    console.log(`Hoje é ${falarDia.week[1]}`);
    break;

  case 2:
    console.log(`Hoje é ${falarDia.week[2]}`);
    break;
  case 3:
    console.log(`Hoje é ${falarDia.week[3]}`);
    break;
  case 4:
    console.log(`Hoje é ${falarDia.week[4]}`);
    break;
  case 5:
    console.log(`Hoje é ${falarDia.week[5]}`);
    break;
  case 6:
    console.log(`Hoje é ${falarDia.week[6]}`);
    break;
  case 7:
    console.log(`Hoje é ${falarDia.week[7]}`);
    break;

  default:
    break;
}
