let contador = localStorage.length/2;
let dados = [];

window.onload = function addListaAnterior () {
    // const lista = document.getElementById('lista-tarefas');
    for(let a = 0; a < localStorage.length; a += 1) {
        
        let classLista = localStorage.key(a);
        for(let b = 0; b < localStorage.length; b += 1) {
            if(classLista == 'tarefa' + b) {
                colocaId (a);
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
                cria(classLista, n);
            }
        }
}

function cria(ordem, i) {
    const recuperando = lista.appendChild(document.createElement('li'));
    console.log(recuperando);
    recuperando.id = localStorage.key(i);
    classLista = recuperando.id;
    recuperando.className = localStorage.getItem(classLista);
    return classLista;
}

function adicionarTarefa() {
  const tarefa = document.getElementById('texto-tarefa').value;
  const lista = document.getElementById('lista-tarefas');
  const novaTarefa = lista.appendChild(document.createElement('li'));
  novaTarefa.innerText = tarefa;
  novaTarefa.id = 'tarefa' + contador;
  novaTarefa.className = 'topicos-lista'
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
    if(mudarBackground.className === 'topicos-lista') {
           mudarBackground.className = 'topicos-lista selecionado';
    }
    else {
        mudarBackground.className = 'topicos-lista selecionado completed';
    }
 
    // console.log(mudarBackground.className);
    // salvarElemento(classeItem, mudarBackground.className);
})

lista.addEventListener('dblclick', function(event) {
    let evento = event.target.id;
    let concluido = document.getElementById(evento);
    if(concluido.style.textDecoration == 'line-through solid black') {
        concluido.style.textDecoration = 'none';
        if(concluido.className = 'topicos-lista completed'){
            concluido.className = 'topicos-lista selecionado';
        }
    } else {
        concluido.style.textDecoration = 'line-through solid black';
        if(concluido.className = 'topicos-lista'){
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
        // organiza(classeLista, 6);
    }
    for(let i = 0; i < contador; i += 1){
        let conteudoElemento2 = document.getElementById('tarefa' + i);
        let conteudo = conteudoElemento2.innerText;
        let conteudoTexto = String(conteudo);
        let chaveConteudo = 'conteudo' + i;
        salvarElemento(chaveConteudo, conteudoTexto);
        // organiza(chaveConteudo, 8);
    }

}

function salvarElemento(chave, idElemento) {
    window.localStorage.setItem(chave, idElemento);
}

function sobeElemento () {
    let selecionado = document.getElementsByClassName('selecionado');
    if ((selecionado.length === 0)) {}
    else {
        let idSelecionado = selecionado[0].id;
        let idTransferir = document.getElementById(idSelecionado)
        let anterior = idTransferir.previousElementSibling;
        console.log(anterior);
        if(anterior == null){ 
        } else {
        desce(selecionado, idSelecionado, idTransferir, anterior);
        veCompletos();
        }
    }
}

function desceElemento () {
    let selecionado = document.getElementsByClassName('selecionado');
    if ((selecionado.length === 0)) {}
    else {
        let idSelecionado = selecionado[0].id;
        let idTransferir = document.getElementById(idSelecionado)
        let anterior = idTransferir.nextElementSibling;

        if(anterior == null){ 
        } else {
        desce(selecionado, idSelecionado, idTransferir, anterior);
        veCompletos();
        }
    }
  
}

function desce (selecionado, idSelecionado, idTransferir, anterior) {
//   let selecionado = document.getElementsByClassName('selecionado');
  let texto1 = selecionado[0].innerText;
  let classe1 = selecionado[0].className;
//   let idSelecionado = selecionado[0].id;
//   let idTransferir = document.getElementById(idSelecionado)
//   let anterior = idTransferir.nextElementSibling;
  let texto2 = anterior.innerText;
  let classe2 = anterior.className;
  let idAnterior = anterior.id;
  let mudaTexto1 = document.getElementById(idAnterior);
  mudaTexto1.innerText = texto1;
  idTransferir.innerText = texto2;
  mudaTexto1.id = idSelecionado;
  idTransferir.id = idAnterior;
  mudaTexto1.className = classe1;
  mudaTexto1.style.backgroundColor = 'grey';
  idTransferir.className = classe2;
  idTransferir.style.backgroundColor = 'white';
}


function veCompletos () {
    let a = document.getElementById('lista-tarefas').children;
    for (let i = 0; i < a.length; i += 1){
        if((a[i].className == 'topicos-lista selecionado completed') || (a[i].className == 'topicos-lista completed')){
            a[i].style.textDecoration = 'line-through solid black';
        }
        else {
            a[i].style.textDecoration = 'none';
        }
    }
}