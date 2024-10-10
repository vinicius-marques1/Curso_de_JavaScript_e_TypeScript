fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementosNaPagina(json));

// axios('pessoas.json')
//   .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const body = document.createElement('tbody');

  const trHead = document.createElement('tr');
  const colunas = ['Nome', 'Idade', 'Salario'];
  for(let coluna of colunas) {
    const th = document.createElement('th');
    th.innerHTML = coluna;
    trHead.appendChild(th);
  }
  thead.appendChild(trHead);

  for(let pessoa of json) {
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);
    
    td = document.createElement('td');
    td.innerHTML = pessoa.salario;
    tr.appendChild(td);

    body.appendChild(tr);
  }

  table.appendChild(thead);
  table.appendChild(body);

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}
