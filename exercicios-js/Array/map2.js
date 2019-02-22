const carrinho = [              //Array json
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno" , "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

//Retornar um array com apenas os precos
//json.parse tranformar as strings em objeto
const paraObjeto = json => JSON.parse(json)     // Converter um texto para objeto
const soPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(soPreco)
console.log(resultado)