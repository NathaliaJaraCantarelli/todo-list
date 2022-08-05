let contador = 0;
function adicionarTarefa() {
    
  const tarefa = document.getElementById('texto-tarefa').value;
  const lista = document.getElementById('lista-tarefas');
  const novaTarefa = lista.appendChild(document.createElement('li'));
  novaTarefa.innerText = tarefa;
  novaTarefa.id = 'tarefa' + contador;
  contador += 1;
  document.getElementById('texto-tarefa').value = "";
}

let lista = document.getElementById('lista-tarefas');
lista.addEventListener('click', function(event) {
    let evento = event.target.id;
    let mudarBackground = document.getElementById(evento);
    mudarBackground.style.backgroundColor = 'grey';
})
