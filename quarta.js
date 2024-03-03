function numerosImpares(){
    const numeros = [];


    for(let i = 1; i <=10; i++){
        if(i % 2 !== 0){
            numeros.push(i);
        }

    }

    return numeros;

}


const impares = numerosImpares();
console.log(impares);





