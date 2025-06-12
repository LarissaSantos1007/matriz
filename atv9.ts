//Crie uma matriz 3x3 com números aleatórios entre 0 e 20. Em seguida, exiba a matriz na tela e encontre o maior elemento da matriz e a posição em que ele se encontra.
// Nome: Larissa Santos

let teclado = require("prompt-sync")();
let matriz: number[][] = [];
let soma = 0;

for (let i = 0; i < 6; i++) {
  matriz[i] = [];
  for (let j = 0; j < 6; j++) {
    let numero = parseInt(teclado("digite um número para [" + i + "][" + j + "]: "));
    matriz[i][j] = numero;
  }
}

console.log("matriz:");
for (let i = 0; i < 6; i++) {
  console.log(matriz[i]);
}

for (let j = 0; j < 6; j++) {
  if (j % 2 === 0) {
    for (let i = 0; i < 6; i++) {
      soma = soma + matriz[i][j];
    }
  }
}

console.log("soma das colunas pares:", soma);
