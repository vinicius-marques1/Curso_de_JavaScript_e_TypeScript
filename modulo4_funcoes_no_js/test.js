function* geradora1() {
    // Código qualquer ...
    yield 'Valor 1';
    // Código qualquer ...
    yield 'Valor 2';
    // Código qualquer ...
    yield 'Valor 3';
}
const gen = geradora1()
// console.log(gen.next().value)

for (let value of gen) {
    console.log(value)
}