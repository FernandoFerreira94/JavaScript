// ----------- PROMISES --------

// promise.resolve / promises.reject
const timeRandom = (min = 1, max = 3) => {
  max *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
};
console.log(timeRandom(1, 3));

const esperaAi = (msg, tempo) => {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject(false);
    }
    setTimeout(() => {
      resolve(msg + " passei da promises");
    }, tempo);
  });
};

/*
esperaAi("good Morning", timeRandom(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi(2, timeRandom(1, 3)).then((resposta) => {
      console.log(resposta);
      return esperaAi("good night", timeRandom(1, 3)).then((resposta) => {
        console.log(resposta);
      });
    });
  })
  .catch((e) => {
    console.log(e);
  });

// promises.all /
// retorna as promises na ordem
const promises = [
  "primeiro valor",
  esperaAi("all 1", timeRandom()),
  esperaAi("all 2", timeRandom()),
  esperaAi("all 3", timeRandom()),
  "outro valor",
];

Promise.all(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch((e) => console.log(e));
console.table(promises);

// promisse.race /
// retorna a promises que resolve primeiro
const promisesRace = [
  esperaAi("race 1", timeRandom()),
  esperaAi("race 2", timeRandom()),
  esperaAi("race 3", timeRandom()),
];

Promise.race(promisesRace)
  .then(function (valor) {
    console.log(valor);
  })
  .catch((e) => console.log(e));
console.table(promisesRace);
*/

// ---------- ASYNC / AWAit ------------

esperaAi("ok 1", timeRandom()).then((valor) => {
  console.log(valor);
  return esperaAi("ok 2", timeRandom()).then((valor) => {
    console.log(valor);
  });
});

async function executa() {
  try {
    const fase1 = await esperaAi("assicrona 1", timeRandom());
    console.log(fase1);
    // caso a promise for rejeitada ou nao disponivel recuperar o valor
    /* setTimeout(() => {
      console.log(fase1);
    }, 4000);
*/

    const fase2 = await esperaAi("assicrona 2", timeRandom());
    console.log(fase2);
    const fase3 = await esperaAi(1, timeRandom());
    console.log(fase3);
  } catch (e) {
    console.log(e);
  }
}

executa();
