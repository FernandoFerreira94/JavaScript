/*
// -------fetch recupera os dados de um arquivo

fetch("../json/pessoas.json")
  .then((resposta) => {
    return resposta.json();
  })
  .then((json) => carregaHtml(json));
*/

// -------- AXIOS
// or
axios("../json/pessoas.json").then((resposta) => carregaHtml(resposta.data));

// função de atribuir os dados recuperados para o HTML
function carregaHtml(json) {
  // criando uma tabela
  const table = document.createElement("table");
  for (const pessoas of json) {
    // criando as Colunas tr
    const tr = document.createElement("tr");

    // criando as linhas TD
    const tdNome = document.createElement("td");
    tdNome.innerHTML = "Nome: " + pessoas.nome + "    ";
    // colocando o td dentro do tr
    tr.appendChild(tdNome);

    // criando as linhas TD
    const tdCpf = document.createElement("td");
    tdCpf.innerHTML = "CPF: " + pessoas.cpf + "     ";
    // colocando o td dentro do tr
    tr.appendChild(tdCpf);

    // criando as linhas TD
    const tdSexo = document.createElement("td");
    tdSexo.innerHTML = "R$ " + pessoas.salario + ".";
    // colocando o td dentro do tr
    tr.appendChild(tdSexo);

    // colocando o TR dentro da tabela
    table.appendChild(tr);
    console.log(pessoas);
  }

  const textTable = document.querySelector(".json");
  textTable.appendChild(table);
}
