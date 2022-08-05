let contador = 0;
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
    }
    let evento = event.target.id;
    let mudarBackground = document.getElementById(evento);
    mudarBackground.style.backgroundColor = 'grey';
})
