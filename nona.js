var endereco = {
    rua: "Rua ABC",
    numero: 123,
    bairro: "Centro",
    cidade: "ExemploCity"
};

// Loop for...in para mostrar todas as propriedades e valores
for (var propriedade in endereco) {
    if (endereco.hasOwnProperty(propriedade)) {
        console.log(propriedade + ": " + endereco[propriedade]);
    }
}
