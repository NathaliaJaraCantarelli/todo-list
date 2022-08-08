let contador = localStorage.length/2;
let dados = [];

window.onload = function addListaAnterior () {
    // const lista = document.getElementById('lista-tarefas');
    for(let a = 0; a < localStorage.length; a += 1) {
        colocaId (a);
        let classLista = localStorage.key(a);
        for(let b = 0; b < localStorage.length; b += 1) {
            if(classLista == 'tarefa' + b) {
                let teste = document.getElementById(classLista);
                let conteudo = localStorage.getItem('conteudo' + b);
                teste.innerText = conteudo;
            }
        }
    }
    console.log(localStorage);
}

function colocaId (n) {
    let classLista = localStorage.key(n);
        for(let j = 0; j < localStorage.length; j += 1){
            if(classLista === 'tarefa' + j) {
                const recuperando = lista.appendChild(document.createElement('li'));
                recuperando.id = localStorage.key(n);
                classLista = recuperando.id;
                recuperando.className = localStorage.getItem(classLista);
                return classLista;
            }
        }
}

function adicionarTarefa() {
  const tarefa = document.getElementById('texto-tarefa').value;
  const lista = document.getElementById('lista-tarefas');
  const novaTarefa = lista.appendChild(document.createElement('li'));
  novaTarefa.innerText = tarefa;
  novaTarefa.id = 'tarefa' + contador;
  novaTarefa.className = 'topicos-lista'
// //   let idItem = 'id' + contador;
// //   salvarElemento(idItem, novaTarefa.id);
//   salvarElemento(novaTarefa.id, novaTarefa.className);
//   let conteudoItem = 'conteudo' + contador
//   salvarElemento(conteudoItem, novaTarefa.innerText);
  console.log(localStorage)
  contador += 1;
  document.getElementById('texto-tarefa').value = "";
}

for (let j = 0; j < localStorage.length; j += 1){
    if(localStorage.getItem('id' + j)){
        console.log(localStorage.getItem('id' + j));
    }
    
    //const novaTarefa = lista.appendChild(document.createElement('li'));
}

let lista = document.getElementById('lista-tarefas');
lista.addEventListener('click', function(event) {
    let reset = document.querySelectorAll('.topicos-lista');
    for(let index = 0; index < reset.length; index += 1) {
        reset[index].style.backgroundColor = 'white';
        if((reset[index].className === 'topicos-lista selecionado completed') || (reset[index].className === 'topicos-lista completed')){
            reset[index].className = 'topicos-lista completed';
        } else {
            reset[index].className = 'topicos-lista';
        }
        salvarElemento(reset[index].id, reset[index].className);
    }
    let evento = event.target.id;
    let mudarBackground = document.getElementById(evento);
    // let classeItem = mudarBackground.id;
    mudarBackground.style.backgroundColor = 'grey';
    mudarBackground.className = 'topicos-lista selecionado';
    // console.log(mudarBackground.className);
    // salvarElemento(classeItem, mudarBackground.className);
})

lista.addEventListener('dblclick', function(event) {
    let evento = event.target.id;
    let concluido = document.getElementById(evento);
    if(concluido.style.textDecoration == 'line-through solid black') {
        concluido.style.textDecoration = 'none';
        if(concluido.className = 'topicos-lista completed'){
            concluido.className = 'topicos-lista';
        } else {
            concluido.className = 'topicos-lista selecionado';
        }
    } else {
        concluido.style.textDecoration = 'line-through solid black';
        if(concluido.className = 'topicos-lista'){
            concluido.className = 'topicos-lista completed';
        } else {
            concluido.className = 'topicos-lista selecionado completed';
        }
    }
    salvarElemento(concluido.id, concluido.className); 
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

function salvarTarefas() {
    localStorage.clear();
    for(let i = 0; i < contador; i += 1){
        let conteudoElemento = document.getElementById('tarefa' + i);
        let classeLista = 'tarefa' + i;
        let classeElemento = conteudoElemento.className;
        salvarElemento(classeLista, classeElemento);
        // let conteudo = conteudoElemento.innerText;
        // let conteudoTexto = String(conteudo);
        // console.log(conteudoTexto);
        // let chaveConteudo = 'conteudo' + i;
        // salvarElemento(chaveConteudo, conteudoTexto);
        // let classeLista = 'tarefa' + i;
        // let classeElemento = conteudoElemento.className;
        // salvarElemento(classeLista, classeElemento);
        // console.log(classeElemento);
        // console.log(localStorage);
    }
    for(let i = 0; i < contador; i += 1){
        let conteudoElemento2 = document.getElementById('tarefa' + i);
        // let classeLista = 'tarefa' + i;
        // let classeElemento = conteudoElemento2.className;
        // salvarElemento(classeLista, classeElemento);
        let conteudo = conteudoElemento2.innerText;
        let conteudoTexto = String(conteudo);
        console.log(conteudoTexto);
        let chaveConteudo = 'conteudo' + i;
        salvarElemento(chaveConteudo, conteudoTexto);
        // let classeLista = 'tarefa' + i;
        // let classeElemento = conteudoElemento.className;
        // salvarElemento(classeLista, classeElemento);
        // console.log(classeElemento);
        console.log(localStorage);
    }
    // novaTarefa.className = 'topicos-lista'
    // //   let idItem = 'id' + contador;
    // //   salvarElemento(idItem, novaTarefa.id);
      
    //   let conteudoItem = 'conteudo' + contador
    //   salvarElemento(conteudoItem, novaTarefa.innerText);
}

function salvarElemento(chave, idElemento) {
    window.localStorage.setItem(chave, idElemento);
}
