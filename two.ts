// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será
//  a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
// escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci
// e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function fibonacci(n: number): string {
  let sequence = [0, 1];

  while (sequence[sequence.length - 1] < n) {
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
  }

  if (sequence.includes(n)) {
    return `O número ${n} pertence à sequência de Fibonacci.`;
  } else {
    return `O número ${n} não pertence à sequência de Fibonacci.`;
  }
}

console.log(fibonacci(13)); // O número 13 pertence à sequência de Fibonacci.
console.log(fibonacci(14)); // O número 14 não pertence à sequência de Fibonacci.
