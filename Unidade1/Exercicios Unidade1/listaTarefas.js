let listaTarefa = {
  // criando caminho
  campAdd: document.getElementById("campAdd"),
  tarefa: document.getElementById("tarefa"),
  // creando Ol
  ol: document.createElement("ol"),

  // função de adicionar tarefas
  toAdd() {
    // convertendo valorTarefa em string e reirando esoaço vazio
    let valorTarefa = this.campAdd.value.trim();

    // condição verificar se o valor esta vazio e se é apenas numeros
    if (valorTarefa !== "" && isNaN(valorTarefa)) {
      // condição deverificar se existe um ol na div
      if (!this.tarefa.contains(this.ol)) {
        this.tarefa.appendChild(this.ol);
      }

      // criando li toda vez que adicionar uma tarefa
      let li = document.createElement("li");
      // adicionando li no ol
      this.ol.appendChild(li);
      li.innerHTML += `${this.campAdd.value}<button onclick="listaTarefa.limpar(this)" type="button" id="excluir">X</button>
            `;
      this.campAdd.value = "";
    } else {
      alert("Preencha o campos!");
    }
  },

  // função de remover li do button, passando this na condição da função
  limpar(button) {
    button.parentElement.remove();
  },
};
