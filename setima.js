function encontraMaiorNumero(numeros) {
    if (numeros.length === 0) {
        return null;
    }

    let maiorNumero = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i];
        }
    }

    return maiorNumero;
}


const arrayDeNumeros = [10, 5, 8, 20, 15];
const maiorNumeroEncontrado = encontraMaiorNumero(arrayDeNumeros);

console.log("O maior número é:", maiorNumeroEncontrado);
