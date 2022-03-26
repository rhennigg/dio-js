/*erro em tempo de execução - composto por mensagem, nome, linha e call stack
 domexception - relacionado à pagina da web que está consumindo o js
*/
/*throw é usado para retornar erro (enquanto return por exemplo vai retornar o valor em si)
ex: return "String inválida!" //só vai retornar a string
throw "String inválida!"; //vai retornar a mensagem de erro no console
*/
/*try catch vai tentar executar algo () no try{} e se houver erro ele é tratado no catch(e){} 
pode-se usar o finally também. Ele será executado independente de haver erro ou não
*/

function verificaPalindromo(string){
    if(!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExample(string){
    try{
        console.log(verificaPalindromo(string));
    }
    catch(e){
        console.log(e);
    }
    finally{
        console.log('se houve erro ou não eu rodo igual')
    }
}

tryCatchExample("aaafaaa");