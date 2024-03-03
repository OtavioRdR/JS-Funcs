var aluno = {
    nome: "João",
    idade: 22,
    curso: "Engenharia",
    matricula: "12345",

    mostrarInformacoes: function() {
        console.log("Nome: " + this.nome);
        console.log("Idade: " + this.idade);
        console.log("Curso: " + this.curso);
        console.log("Matrícula: " + this.matricula);
    }
};


aluno.mostrarInformacoes();
