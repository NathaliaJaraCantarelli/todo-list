let contador = 0;
let dados = [];
// window.onload = function addListaAnterior () {
//     for (let j = 0; j < localStorage.length; j += 1){
//         console.log(localStorage.getItem(j));
//         const novaTarefa = lista.appendChild(document.createElement('li'));
//     }
// }
function adicionarTarefa() {
  const tarefa = document.getElementById('texto-tarefa').value;
  const lista = document.getElementById('lista-tarefas');
  const novaTarefa = lista.appendChild(document.createElement('li'));
  novaTarefa.innerText = tarefa;
  novaTarefa.id = 'tarefa' + contador;
  novaTarefa.className = 'topicos-lista'
  contador += 1;
  document.getElementById('texto-tarefa').value = "";
}

let lista = document.getElementById('lista-tarefas');
lista.addEventListener('click', function(event) {
    let reset = document.querySelectorAll('.topicos-lista');
    for(let index = 0; index < reset.length; index += 1) {
        reset[index].style.backgroundColor = 'white';
        reset[index].className = 'topicos-lista';
    }
    let evento = event.target.id;
    let mudarBackground = document.getElementById(evento);
    mudarBackground.style.backgroundColor = 'grey';
    mudarBackground.className = 'topicos-lista' + ' ' + 'selecionado'
})

lista.addEventListener('dblclick', function(event) {
    let evento = event.target.id;
    let concluido = document.getElementById(evento);
    if(concluido.style.textDecoration == 'line-through solid black') {
        concluido.style.textDecoration = 'none';
        concluido.className = '';
    } else {
        concluido.style.textDecoration = 'line-through solid black';
        concluido.className = 'completed';
    }
})

function apagaLista() {
    console.log(lista.children);
    for(let i = lista.children.length-1; i >= 0 ; i -= 1) {
        lista.children[i].remove();
    }
}

function removeFinalizados() {
    let finalizdosLista = document.querySelectorAll('.completed');
    for(let i = finalizdosLista.length-1; i >= 0 ; i -= 1) {
        finalizdosLista[i].remove();
    }
}

function removeSelecionado() {
    let removeItem = document.getElementsByClassName('selecionado');
    for(let i = removeItem.length-1; i >= 0 ; i -= 1) {
        removeItem[i].remove();
    }
}
