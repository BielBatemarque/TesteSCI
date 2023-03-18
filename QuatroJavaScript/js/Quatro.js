const res = window.document.querySelector('#res');
    let vet = [0, 0, 0, 0, 0];

for(let i = 0; i < vet.length; i++){
    vet[i] = parseFloat(prompt('Digite um numero: '));
}

res.innerHTML = `O valor apresentado na posição três é: ${vet[2]}`;