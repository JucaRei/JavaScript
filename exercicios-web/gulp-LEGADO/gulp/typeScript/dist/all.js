"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var produto_1 = require("./produto");
function exibir(v) {
    console.log(v.nome + " custa " + v.preco + "!");
}
var c = new produto_1.Carro();
c.nome = "Civic";
c.preco = 89499.0;
exibir(c);
function soma(a, b) {
    return a + b;
}
console.log(soma(9, 6));

import { Carro } from "./produto";
function exibir(v) {
    console.log(`${v.nome} custa ${v.preco}!`);
}
const c = new Carro();
c.nome = "Civic";
c.preco = 89499.0;
exibir(c);
function soma(a, b) {
    return a + b;
}
console.log(soma(9, 6));

export class Carro {
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro = /** @class */ (function () {
    function Carro() {
    }
    return Carro;
}());
exports.Carro = Carro;
