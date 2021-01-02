let a = 1;
console.log(a);

// ------------------------------------------------------------------

let p = new Promise(function (resolve) {
  resolve(3);
});

// promessa gera apenas 1 unico valor
// then para acessar o valor da promise (objeto)
p.then(function (valor) {
  console.log(valor);
});

// console.log(typeof Promise);
// console.log(typeof p);

// ------------------------------------------------------------------

// para pegar mais valores, tem que criar um objeto, lista, etc
let p2 = new Promise(function (cumprirPromessa2) {
  cumprirPromessa2({
    x: 3,
    y: 5,
  });
});

p2.then(function (valor2) {
  console.log(valor2);
});

// ------------------------------------------------------------------

// Lista
let p3 = new Promise(function (cumprirPromessa3) {
  cumprirPromessa3(["João", "André", "José", "Larissa"]);
});

// arrow function
p3.then((valor3) => console.log(valor3));

// ------------------------------------------------------------------

let p4 = new Promise(function (cumprirPromessa4) {
  cumprirPromessa4(["Eva", "Juca", "Ronilson", "Luiz"]);
});
//outra forma
p4.then(valor4 => console.log(valor4));

p4
    // .then(nome => console.log(nome[1]))
    .then(valor4 => valor4[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))

// ------------------------------------------------------------------

let p5 = new Promise(function (cumprirPromessa4) {
  cumprirPromessa4(['Reinaldo', 'Márcio', 'Lucas', 'Alexia']);
});

function primeiroElemento(array) {
  return array[0]
}

function primeiraLetra(string) {
  return string[0]
}

const letraMinuscula2 = letra2 => letra2.toLowerCase()

p5
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula2)
    .then(console.log)

// ------------------------------------------------------------------

let p6 = new Promise(function (cumprirPromessa5) {
  cumprirPromessa5(['Corinthians', 'Palmeiras', 'São Paulo', 'Santos']);
});

const primeiroElemento2 = arrayOuString => arrayOuString[0]
const letraMinuscula3 = letra3 => letra3.toLowerCase()

p6
    .then(primeiroElemento2)
    .then(primeiroElemento2)
    .then(letraMinuscula3)
    .then(console.log)