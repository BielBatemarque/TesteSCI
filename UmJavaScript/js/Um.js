const res = window.document.querySelector('#res');
const solicitaNumeros = () => {
    let n1 = parseFloat(prompt("Digite o primeiro número:"));
    let n2 = parseFloat(prompt("Digite o segundo número:"));
    let n3 = parseFloat(prompt("Digite o terceiro número:"));
    let n4 = parseFloat(prompt("Digite o quarto número:"));
    let n5 = parseFloat(prompt("Digite o quinto número:"));
    const arrayNumeros = [n1, n2 , n3, n4, n5];
        // console.log(typeof n1);1
    res.innerHTML = `${n1}, ${n2}, ${n3}, ${n4}, ${n5}`;

    const pares = arrayNumeros.filter((e) => e%2 === 0);
    const impares = arrayNumeros.filter((e) => e%2 === 1);
    var media = 0;
    for(let i = 0; i < arrayNumeros.length; i++){
        media += arrayNumeros[i];
    }
    console.log(media);

    res.innerHTML = `Pares: ${pares} Impares: ${impares} media: ${media/5}`;


};
solicitaNumeros();

