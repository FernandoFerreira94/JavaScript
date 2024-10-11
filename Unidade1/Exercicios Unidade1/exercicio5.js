const p = document.querySelector(".paragrafo");
// selecionando todos os 'p' dentro da class (.paragrafo')
const pio = p.querySelectorAll("p");
// recupear o background do body
const backgroundBody = getComputedStyle(window.document.body).background;

// loop para atribuir o fundo em todos os 'p'
for (let i = 0; i < pio.length; i++) {
  pio[i].style.background = backgroundBody;
  pio[i].style.fontWeight = "bold";
  pio[i].style.color = "red";
}

for (const key of pio) {
  key.style.background = backgroundBody;
  key.style.color = "white";
  key.style.padding = "10px";
}
