/**
 * Method Chaining
 *
 * Padrão utilizado em Object-oriented programming (OOP) com o propósito de invocar múltiplos métodos.
 *
 * Cada método deve retornar um objeto, permitindo que as chamadas sejam encadeadas em uma única
 * instrução de modo que não seja necessário criar variáveis para armazenar valores intermediários.
 */

class Counter {
  private value: number;

  constructor() {
    this.value = 0;
  }

  decrease() {
    --this.value;
    return this;
  }

  increase() {
    ++this.value;
    return this;
  }

  log() {
    console.log(this.value);
    return this;
  }
}

const counter = new Counter();

// "this" nesse contexto é referente à instância criada.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#class_context
counter.decrease().decrease().log().increase().increase().log().increase().increase().log();
