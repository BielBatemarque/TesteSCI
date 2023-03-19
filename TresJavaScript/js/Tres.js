const res = window.document.querySelector('#res');
const btn = window.document.querySelector('#btn');

class Aluno{
    constructor(nome, nota1, nota2, nota3, nota4){
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
        this.media = (nota1 + nota2 + nota3 + nota4) /4;
        this.status = '';
        if(this.media >= 6){
            this.status = 'aprovado';
        }else{
            this.status = 'reprovado';
        }
    }

}

const sistemaNotasAluno = () => {
    let arrayAlunos = [];
    while(true){
        let nome = prompt("Digite o nome do aluno (ou 'sair' para encerrar): ");
        if(nome === 'sair'){
            break;
        }else{
            let nota1 = parseFloat(prompt("Digite a primeira nota: "));
            let nota2 = parseFloat(prompt("Digite a segunda nota: "));
            let nota3 = parseFloat(prompt("Digite a terceira nota: "));
            let nota4 = parseFloat(prompt("Digite a quarta nota: "));
            // console.log(aux);
            arrayAlunos.push(new Aluno(nome, nota1, nota2, nota3, nota4));
        }

        console.log(arrayAlunos);
    }

    btn.addEventListener('click', () => {
         let aluno = window.document.querySelector('#aluno').value;
        for(let i = 0; i<= arrayAlunos.length; i++){
            if(aluno == arrayAlunos[i].nome){
                res.innerHTML =`<br> O Aluno ${aluno} está ${arrayAlunos[i].status}`;
            }else{
                res.innerHTML =`Aluno : ${aluno} não encontrado`;
            }
        } 
    });

};

sistemaNotasAluno();