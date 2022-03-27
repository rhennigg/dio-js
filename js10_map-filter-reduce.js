//map cria um novo array, não muda o original
const array = [1,5,10,12];

console.log(array.map((item) => item * 2));

console.log(array.map(function multiplicaPorDois(item){return item * 2;}));

console.log(array.map(function(item){return item * 2;}));

console.log(array.map(multiplicaDois));

function multiplicaDois(it){
    return it * 2;
}

var new_array = [];
console.log(array.forEach((item) => new_array.push(item * 2)));
console.log(new_array);

//filter é usado para criar um novo array só com os itens que passaram pelo filtro
const frutas = ['laranja do céu','laranja de umbigo','maçã','pera'];
console.log(frutas.filter((fruta) => fruta.includes('laranja')));

//reduce executa uma função em todos elementos do array retornando um unico valor que
//pode ser um array ou qualquer outro tipo, como string, numero...
console.log(array.reduce((it) => ));
