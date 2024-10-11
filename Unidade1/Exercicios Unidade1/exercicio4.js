const relogioDigital = document.getElementById("data");

function dataMonth(month) {
  switch (month) {
    case 0:
      return `Janeiro`;

    case 1:
      return `Fevereiro`;

    case 2:
      return `Março`;

    case 3:
      return `Abril`;

    case 4:
      return `Maio`;

    case 5:
      return `Junho`;

    case 6:
      return `Julho`;

    case 7:
      return `Agosto`;

    case 8:
      return `Setembro`;

    case 9:
      return `Outubro`;

    case 10:
      return `Novembro`;

    case 11:
      return `Dezembro`;

    default:
  }
}

function dataWeek(week) {
  switch (week) {
    case 0:
      return `Domingo`;

    case 1:
      return `Segunda-feira`;

    case 2:
      return `Terça-feira`;

    case 3:
      return `Quarta-feira`;

    case 4:
      return `Quinta-feira`;

    case 5:
      return `Sexta-feira`;

    case 6:
      return `Sabado`;

    default:
  }
}

function dataDigital() {
  const data = new Date();

  let tempo = {
    day: data.getDate() >= 10 ? data.getDate() : `0${data.getDate()}`,
    month: data.getMonth(),
    year: data.getFullYear(),

    hours: data.getHours() >= 10 ? data.getHours() : `0${data.getHours()}`,
    minute:
      data.getMinutes() >= 10 ? data.getMinutes() : `0${data.getMinutes()}`,
    seconds:
      data.getSeconds() >= 10 ? data.getSeconds() : `0${data.getSeconds()}`,

    week: data.getDay(),
  };

  relogioDigital.innerHTML = `<h3> ${dataWeek(tempo.week)}, ${
    tempo.day
  } de ${dataMonth(tempo.month)} de ${tempo.year}, ${tempo.hours}:${
    tempo.minute
  }:${tempo.seconds} </h3>`;
}

setInterval(dataDigital, 1000);

dataDigital();
