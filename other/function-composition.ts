/**
 * Function Composition
 *
 * A composição de funções combina duas ou N funções para produzir uma nova função.
 *
 * A representação matemática de uma composição de duas funções "f" e "g" é:
 * "f(g(x))"
 * De modo que "g(x)" computado primeiro e o resultado passado para "f".
 */

const add = (x: number) => x + 1;
const multiply = (x: number) => x * 2;

// Composição de 2 funções
// Para facilitar a leitura do código:
// O primeiro parâmetro é uma função com um parâmetro do tipo B e retorna A;
// O segundo parâmetro é uma função com um parâmetro numérico e retorna B.
function compose<A, B>(f: (fn: B) => A, g: (fn: number) => B) {
  return function (x: number) {
    return f(g(x));
  };
}

// A variável criada com a atribuição "compose" será uma nova função.
const newFn = compose(multiply, add);
console.log(newFn(10));

// Composição de N funções
function composeFns(...fns: ((param: number) => number)[]) {
  return function (x: number) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}

console.log(composeFns(multiply, add, add, add, add, add)(10));
console.log(composeFns(multiply, multiply, multiply)(30));

// PIPE
// Exatamente o mesmo conceito, porém, o processamento ocorre da esquerda para a direita.
function pipeFns(...fns: ((param: number) => number)[]) {
  return function (x: number) {
    return fns.reduce((acc, fn) => fn(acc), x);
  };
}

console.log(pipeFns(multiply, add, add, add, add, add)(10));
console.log(pipeFns(multiply, multiply, multiply)(30));
