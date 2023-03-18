const res = window.document.querySelector('#res');

const solicitaNumeros = () => {
    let arrayNumeros = [];
    for (let i = 0; i < 5; i++) {
        arrayNumeros.push(parseFloat(prompt(`Digite o número ${i + 1}:`)));
      }
        // console.log(typeof n1);1

    let maior = arrayNumeros[0];
    let menor = arrayNumeros[0];

    for(let i = 0; i < arrayNumeros.length; i++){
        if(arrayNumeros[i] > maior){
            maior = arrayNumeros[i];
        }
        if(arrayNumeros[i] < menor){
            menor = arrayNumeros[i];
        }
    }

    res.innerHTML = `Maior: ${maior}, menor: ${menor}`;
};
solicitaNumeros();