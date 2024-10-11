const tempo = setInterval(() => {
  let relogio = new Date().toLocaleTimeString();
  document.querySelector("marquee").innerHTML = `${relogio} `;
}, 0);

setTimeout(() => {
  clearInterval(tempo);
}, 5000); // Aumenta o tempo para 3 segundos
