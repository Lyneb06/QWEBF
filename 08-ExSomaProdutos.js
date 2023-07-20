//Declaração da variavel
let precoProduto1,precoProduto2,precoProduto3
//Atribuição da variavel
//Entrada de dados
precoproduto1 = 9.99;
precoproduto2= 13.25;
precoproduto3 = 22.30;

//Procesamento
let valorTotal = precoproduto1 + precoProduto2 + precoProduto3;
//Saida
//console.log("Valor do produto 1: R$" + precoProduto1);
//console.log('Valor do produto 1: R$' + precoProduto1);

//Template String
console.log(`Valor do produto 1: R$ ${precoproduto1}`);
console.log(`Valor do produto 2: R$ ${precoproduto2}`);
console.log(`Valor do produto 3: R$ ${precoproduto3}`);
console.log(` O Valor total de todos os produtos é de: R$ ${valorTotal.tofixed(2)}`);



