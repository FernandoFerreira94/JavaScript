// recuperando html de uma pagina via ajax
// ------------- fetch ---------------

// função de recuperar a tag do link para recuperar a href (refrencia)
document.addEventListener("click", (e) => {
  // selecioandno a target do evento de click (a = link)
  const el = e.target;
  // transformando em lowCase letra minuscula
  const tag = el.tagName.toLowerCase();

  // verificar se é mesmo um (a) = link
  if (tag === "a") {
    // methodo para nao redirecioanar para outra pagina
    e.preventDefault();
    // chamando a função de carrega corpo da pagina
    carregaPagina(el);
  }
});

// recuperando a href (referencia) da pagina el.getAttibute('href')
async function carregaPagina(el) {
  try {
    // recuperando o corpo da pagina (href.text)
    const href = el.getAttribute("href");
    // indiciando fetch na variavel com refrencia href
    const response = await fetch(href);
    // verificando se status da pagina nao deu erro
    if (response.status !== 200) throw new Error("Erro 404");

    // atribuindo o valor html da pagina na variavel
    const html = await response.text();
    // jogando o corpo da pagina na função carregaResultado()
    carregarResultado(html);
    // carregar o erro
  } catch (e) {
    console.log(e);
  }
}

function carregarResultado(response) {
  let resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
