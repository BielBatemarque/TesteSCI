const res = window.document.querySelector('#res');
const aluno = window.document.querySelector('#aluno');

class Aluno{
    constructor(nome, nota1, nota2, nota3, nota4){
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
        this.media = (nota1 + nota2 + nota3 + nota4) /4;

    this.situacaoAluno = () => {
            if(this.media >= 6){
                this.status = 'aprovado';
            }else{
                this.status = 'reprovado';
            }
        }
    }
}

const sistemaNotasAluno = () => {
    while(true){
        let arrayAlunos = [];
        let aux = 0;
        let nome = prompt("Digite o nome do aluno (ou 'sair' para encerrar): ");
        if(nome === 'sair'){
            break;
        }else{
            let nota1 = parseFloat(prompt("Digite a primeira nota: "));
            let nota2 = parseFloat(prompt("Digite a segunda nota: "));
            let nota3 = parseFloat(prompt("Digite a terceira nota: "));
            let nota4 = parseFloat(prompt("Digite a quarta nota: "));
            // console.log(aux);
            arrayAlunos[aux] = new Aluno(nome, nota1, nota2, nota3, nota4);
        }
        aux++; 
    }
};

sistemaNotasAluno();