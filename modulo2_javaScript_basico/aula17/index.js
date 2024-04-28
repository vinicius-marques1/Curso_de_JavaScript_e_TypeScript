// declaração classica de função 
function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;    
}

const resultado = soma(2, 4);
console.log(resultado)

// arrow function
const raiz = (n) => {
    return n ** 0.5
}

console.log(raiz(25))