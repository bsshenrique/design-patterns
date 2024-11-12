/**
 * Partial Application
 *
 * Padrão utilizado para que uma função com vários argumentos seja parcialmente aplicada, ou seja,
 * a função receberá parcialmente alguns de seus argumentos.
 *
 * Um dos propósitos desse padrão é criar funções mais especializadas.
 */

// Função normal
// N argumentos
function simpleFunction(a: string, b: string, c: string) {
  return a + b + c;
}

// Partial Application
// Apenas um argumento foi "pré-aplicado", resultando em uma função parcialmente aplicada.
const partial = simpleFunction.bind(null, "Hello");
console.log(partial(" ", "World"));
