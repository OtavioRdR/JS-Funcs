// Supondo que você tenha um array de objetos Alunos
var Alunos = [
    { nome: "João", idade: 22, curso: "Engenharia" },
    { nome: "Maria", idade: 19, curso: "Medicina" },
    { nome: "Carlos", idade: 25, curso: "Arquitetura" },
    // ... outros objetos Aluno
];

function alunosMaior(arrayDeAlunos) {
    // Utilizando o método filter para obter apenas alunos com idade acima de 18
    var alunosMaiores = arrayDeAlunos.filter(function(aluno) {
        return aluno.idade > 18;
    });

    return alunosMaiores;
}

// Exemplo de uso
var alunosMaioresDeIdade = alunosMaior(Alunos);
console.log(alunosMaioresDeIdade);
