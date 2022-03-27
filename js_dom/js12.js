//o BOM (Browser Object Model) é a arvore principal do Browser e entre seus filhos 
//(document, history, location, screen, navigation) está o DOM(Document Object Model) 
//para acessar os elementos do DOM por js pode-se usar:
//document.getElementById('nomedoid'); // retorna 1 unico elemento pra esse id
//document.getElementsByTagName('li'); // retorna array de todas as ocorrencias
//document.getElementsByClassName('textos'); //retorna array de todas as ocorrencias
//document.querySelectorAll('.primeira-classe .segunda-classe'); //permite buscas customizadas, retorna array
//document.querySelectorAll('li .primeira-opcao #principal'); //permite mescla de elementos
/*
document.createElement(element); //cria um novo elemento html
document.removeChild(element);   //remove elemento html
document.appendChild(element);   // adiciona elemento html
document.replaceChild(new, old); // substitui um elemento
*/
/*manipular estilos/css com js
um elemento retornado tem uma class list (são todas as classes que o elemento tem (1 ou mais))

const meuElemento = document.getElementById('meu-elemento');

meuElemento.classList.add('novo-estilo');
meuElemento.classList.remove('classe');
meuElemento.classList.toggle('dark-mode');//se estiver, tira, se não, coloca

//isso /\ faria isso \/

<div id="meuElemento" class="novo-estilo dark-mode">

//alterar o css diretamente com js

document.getElementsByTagName('p').style.color = "blue";
*/

/*manipulação de eventos com js
//eventos de mouse(mouseover, mouseout)
//de click (click, dbclick)
//atualização(Change, load)
const botao = document.getElementById('meuBotao');
botao.addEventListener('click', outraFuncao);

pode ser especificado no html também, nesse caso se adiciona "on" na frente do evento, ex:

<h1 onclick="mudaTexto(this)">Clique aqui!</h1>
<script>
function mudaTexto(id){
    id.innerHTML = "Mudou texto!";
}
</script>
*/