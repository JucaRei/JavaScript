function esperarPor(tempo =2000) {
  return new Promise(function(resolve) {
    setTimeout(() => resolve(), tempo)
  })
}

// esperarPor(2000)
//     .then(() => console.log('Executando Promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promise 3...'))

function retornaValor() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000)
  })
}

async function retornaValorRapido() {
  return 50
}

async function executar() {
  // let valor = await retornaValor()
  let valor = await retornaValorRapido()

  await esperarPor(1500)
  console.log(`Async/Await ${valor}...`)

  await esperarPor(1500)
  console.log(`Async/Await ${valor + 1}...`)
  
  await esperarPor(1500)
  console.log(`Async/Await ${valor + 2}...`)

  return valor + 3
}

// executar().then(console.log)

async function executarDeOutroJeito() {
  const valor = await executar()
  console.log(valor)
}

executarDeOutroJeito()