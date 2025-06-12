//Altere o código dois(2) desse conteúdo para funcionar com números, faça o teste se o laço de repetição referente 
//a linha da matriz chega criar a quarta linha, salve dessa forma e anexe a atividade o arquivo .ts e um print da tela do cmd(prompt command) com o resultado do teste 
// Nome: Larissa Sanots

console.clear();
let teclado = require('prompt-sync')();
let minhaMatriz: number[][] = []; 

let linha: number = parseInt(teclado('Digite o número de linhas da matriz: ')); 
let coluna: number = 2; 

for (let z = 0; z < linha; z++) {
    minhaMatriz[z] = []; 

    for (let x = 0; x < coluna; x++) {
        let numero: number = parseFloat(teclado(`Digite o número para a posição [${z}, ${x}]: `));
        minhaMatriz[z][x] = numero;
    }
}


if (minhaMatriz.length >= 4) {
    console.log("A quarta linha foi criada com sucesso.");
} else {
    console.log(`A quarta linha NÃO foi criada.`);
}

console.log(`Matriz final: `);
console.log(minhaMatriz);
