const meuArray = [20,30,40,20,50,33,234,12];

function valoresUnicos(arr) {
    const mySet = new Set(arr);
    console.log(mySet.add(22));
    return [...mySet];
}

console.log(valoresUnicos(meuArray));
// o ... se chama spread
