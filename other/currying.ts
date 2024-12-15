/**
 * Currying
 *
 * Padrão utilizado para transformar uma função que receberia N argumentos em uma cadeia de funções
 * cujo cada uma das funções encadeadas irá receber um único argumento.
 *
 * Um dos propósitos desse padrão é criar funções mais especializadas.
 */

// Função normal
// N argumentos.
function simpleFunction(a: string, b: string, c: string) {
  return a + b + c;
}

// Currying
// Cada uma das funções na cadeia irá receber um único argumento.
function currying(a: string) {
  return function (b: string) {
    return function (c: string) {
      return a + b + c;
    };
  };
}

const x = currying("Hello");
const y = x(" ");
const z = y("World");
currying("Hello")(" ")("World");

// Exemplo
function getRandomNumber() {
  return Math.floor(Math.random() * 255);
}

const rgb = (r: number) => (g: number) => (b: number) => `rgb(${r},${g},${b})`;

const red = rgb(getRandomNumber())(0)(0);
const green = rgb(0)(getRandomNumber())(0);
const blue = rgb(0)(0)(getRandomNumber());
console.log(red);
console.log(green);
console.log(blue);
console.log(rgb(getRandomNumber())(getRandomNumber())(getRandomNumber()));

// Exemplo
function multiply(x: number) {
  return function xyz(y: number) {
    return x * y;
  };
}

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(1));
console.log(multiplyByTwo(2));
console.log(multiplyByTwo(3));
console.log(multiplyByTwo(4));
