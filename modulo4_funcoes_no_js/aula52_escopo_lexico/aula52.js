const nome = 'Luiz';

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'Otávio';
  falaNome();

  function falaNome2 () {
    console.log(nome)
  }
  falaNome2();
}
usaFalaNome();

