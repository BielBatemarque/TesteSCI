const res = window.document.querySelector('#res');

const matriz = [];
for (let i = 0; i < 3; i++) {
  matriz[i] = [];
}

for (let i = 0; i < 3; i++) {
  const nome = prompt(`Digite o nome do aluno ${i + 1}:`);
  matriz[i][0] = nome;
  for (let j = 1; j <= 4; j++) {
    const nota = parseFloat(prompt(`Digite a nota ${j} de ${nome}:`));
    matriz[i][j] = nota;
  }
}

let maiorMedia = -Infinity;
let menorMedia = Infinity;
let alunoMaiorMedia = '';
let alunoMenorMedia = '';
for (let i = 0; i < 3; i++) {
  let soma = 0;
  for (let j = 1; j <= 4; j++) {
    soma += matriz[i][j];
  }
  const media = soma / 4;
  matriz[i][5] = media;
  if (media > maiorMedia) {
    maiorMedia = media;
    alunoMaiorMedia = matriz[i][0];
  }
  if (media < menorMedia) {
    menorMedia = media;
    alunoMenorMedia = matriz[i][0];
  }
}

for (let i = 0; i < 3; i++) {
  console.log(`${matriz[i][0]} - média: ${matriz[i][5]}`);
}

res.innerHTML = `O aluno com menor media é ${alunoMenorMedia} e o aluno com a maior media é: ${alunoMaiorMedia}`