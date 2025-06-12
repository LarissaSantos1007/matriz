//Crie uma matriz 3x3 com entrada manual de números. Em seguida, exiba a matriz na tela 
// Nome: Larissa Santos

console.clear();
let teclado = require (`prompt-sync`)();
let minhaMatriz: string[][] = []; // declarando matriz 
let linha: number = 3;
let coluna: number = 3;

// z percorre as linhas 
for (let z = 0; z < linha; z++){
    // Criar array vazio para preencher a linha correspondente ao z
    minhaMatriz[z] = [];

    for(let x = 0; x < coluna; x++){
        // Atribuição via entrada de dados manual na variavel nome 
        let nome: string = teclado(`Digite o nome que vai estar no endereço [${z}, ${x}]
                                     da matriz: `);

    //Atribui nome na minhaMatriz do endereço dado por z e x 
    minhaMatriz[z][x] = nome;
    }
}
// imprime a matriz 
console.log(minhaMatriz);