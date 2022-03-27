const maca = {
    value : 2,
};

const laranja = {
    value : 3,
};

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1,2];

console.log('this -> maca', mapComThis(nums, maca));
console.log('this -> laranja', mapComThis(nums, laranja));

function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

const numeros = [1,8,10,15,22];

console.log(mapSemThis(numeros));

//filter

const numb = [1,2,3,4,5,6,10,20,21,23];

function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

console.log(filtraPares(numb));

//reduce
function somaNumeros(arr) {
    return arr.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev + current;
    },0); //0 eh o valor inicial
}

const arry = [1,3,5,8];

console.log(somaNumeros(arry));

//reduce 2
const lista = [
    {
        name:'sabão em pó',
        preco: 30,
    },
    {
        name:'leite',
        preco: 5,
    },
    {
        name:'arroz',
        preco: 15,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, curr, index) {
        console.log('rodada', index+1);
        console.log({prev});
        console.log({curr});
        return prev - curr.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel,lista));