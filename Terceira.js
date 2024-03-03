function calcularSoma(array) {
    
    const soma = array.reduce((total, elemento) => total + elemento, 0);

    return soma;
}


const numeros = [10, 20, 30, 40, 50];
const resultado = calcularSoma(numeros);

console.log(resultado); 
