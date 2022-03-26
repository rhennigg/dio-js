//criando objeto de erro personalizado
//os parametros são opcionais

//new Error(message, filename, lineNumber)

//const MeuErro = new Error('Mensagem Inválida!');
//MeuErro.name = 'Invalid Message';


//vai imprimir primeiro o nome do erro e depois a mensagem e a pilha com linha e coluna do erro
//MeuErro.stack retorna só a pilha
//se imprimir MeuErro retorna todos os parametros
//throw MeuErro;

function validaArray(arr, number) {
    try{
        if(!arr && !number) throw new ReferenceError('Envie os parametros!');
        if(typeof arr !== 'object') throw new TypeError('Array não é do tipo object!');
        if(typeof number !== 'number') throw new TypeError('Number não é do tipo number!');
        if(arr.length !== number) throw new RangeError('Array não é do tamanho de number!');
        return arr;
    }
    catch(e){
        if (e instanceof ReferenceError){
            console.log("ReferenceError!");
            console.log(e.message);
        }else if (e instanceof TypeError){
            console.log("TypeError!");
            console.log(e.message);
        }else if (e instanceof RangeError){
            console.log("RangeError!");
            console.log(e.message);
        }else{
            console.log("Ocorreu um erro não esperado: ",e);
        }
    }
}

console.log(validaArray([1,2,3],3));