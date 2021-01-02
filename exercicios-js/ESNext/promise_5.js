function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject("Ocorreu um erro!");
    } else {
      resolve(valor);
    }
  });
}

funcionarOuNao("Testando...", 0.5)
  .then((v) => console.log(`Valor: ${v}`))
  .then(
    (v) => console.log(v),
    (err) => console.log(`Erro Esp.: ${err}`)
  )
  .then(() => console.log("Quase Fim!"))
  .catch((err) => console.log(`Erro: ${err}`))
  .then(() => console.log("Fim!"));

// via de regra catch fica no final pra tratar todos os erros

// -----------------------------------------------------------------

function funcionarOuNao2(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      con.log('temp')
      if (Math.random() < chanceErro) {
        reject("Ocorreu um erro!");
      } else {
        resolve(valor);
      }
    } catch (e) {
      reject(e);
    }
  });
}

funcionarOuNao2("Testando...", 0.5)
  .then((v) => console.log(`Valor: ${v}`))
  .then(
    (v) => console.log(v),
    (err) => console.log(`Erro Esp.: ${err}`)
  )
  .then(() => console.log("Quase Fim!"))
  .catch((err) => console.log(`Erro Geral: ${err}`))
  .then(() => console.log("Fim!"));
