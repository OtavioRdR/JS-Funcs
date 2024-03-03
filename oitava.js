var produto = {
    nome: "Notebook",
    preco: 1500,
    quantidade: 2,

    calcularTotal: function() {
        return this.preco * this.quantidade;
    }
};

var total = produto.calcularTotal();
console.log("O preço total do produto é:", total);
