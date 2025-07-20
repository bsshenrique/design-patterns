/**
 * Singleton
 *
 * Conceito
 * Garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global a essa instância.
 *
 * Implementação
 * Singleton  - Classe de uma única instância e de acesso global.
 *
 * Cenário de uso
 * Imagine um sistema com a necessidade de registrar logs no console.
 * O programa pode chamar a instância do singleton sempre que for necessária.
 */

// Singleton
class Logger {
  static #instance: Logger;

  // O construtor deve ser definido como privado, isso garante que a classe não possa ser instanciada
  private constructor() {}

  // Um singleton deve sempre definir um método getter disponibilizando a sua única instância
  // Lazy initialization é uma prática comum em singletons
  public static getInstance(): Logger {
    if (!Logger.#instance) {
      Logger.#instance = new Logger();
    }

    return Logger.#instance;
  }

  public log(message: string) {
    const date = new Date();
    console.log(`[${date.toISOString()}] - ${message}`);
  }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

console.log(logger1 === logger2);
logger1.log("Message 1");
logger1.log("Message 2");
logger1.log("Message 3");
logger1.log("Message 4");
