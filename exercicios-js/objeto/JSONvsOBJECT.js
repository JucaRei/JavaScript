const obj = { a: 1, b: 2, c: 3, soma(){ return a + b + c} }
console.log(JSON.stringify(obj))   // gera no formato textual (JSON)

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))     //transformar o JSON em objeto
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))     //transformar o JSON em objeto
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))     //transformar o JSON em objeto
console.log(JSON.parse('{"a": 1.6, "b": "string", "c": true, "d": {}, "e": []}'))
// console.log(JSON.parse('{"a": 1, "b": \'string\', "c": true, "d": {}, "e": [] }'))