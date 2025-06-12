//O código 1 e 2 desse slide deve ser salva e enviado juntos com as atividades abaixo. Todo o conteúdo deve ser compartilhado no github
/*Nome: Larissa Santos
console.clear();
let teclado = require (`prompt-sync`)();
let minhaMatriz: string[][] = []; // declarando matriz 
let linha: number = 2;
let coluna: number = 5;

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
console.log(minhaMatriz);*/

/*console.log();
let teclado = require (Prompt-sync)();
// declarar matriz usando o construtor Array limitado a 3 linhas
let matrizDois: string[][] = new Array(3);

for (let i = 0; i < 3; i++) {
    /* Criar um Array vazio para preencher a linha correspondente ao i 
    limitando a três linha */
    /*matrizDois[i] = new Array(3);
    
    for (let j = 0; j < 4; j++) {
        // Atribuição via entrada da dados manual na variavel nome
        let nome: string = teclado(`Digite o nome que vai estar no endereço [${i}, ${j}]
                                      da matriz: `);

        //Atribui nome na minhaMatriz do endereço dado por i e j
        matrizDois[i][j] = nome;
    }
}
// Imprime a matriz
console.log(matrizDois);*/