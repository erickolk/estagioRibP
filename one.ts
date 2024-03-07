// int INDICE = 13, SOMA = 0, K = 0;

// enquanto K < INDICE faça

// {

// K = K + 1;

// SOMA = SOMA + K;

// }

// imprimir(SOMA);

let indice, soma, aux;

indice = 13;
soma = 0;
aux = 0;

while (aux < indice) {
  aux += 1;
  soma += aux;
}

console.log(soma); // 91
