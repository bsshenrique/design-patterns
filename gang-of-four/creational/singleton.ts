/**
 * Singleton
 *
 * Aplicabilidade, problemas comuns resolvidos:
 * Um singleton garante que o objeto solicitado seja sempre o mesmo;
 * Útil para instâncias únicas de conexão com bancos, loggers, configurações e etc.
 */

class Time {
  static #instance: Time;

  // O construtor deve ser definido como privado
  // O Objetivo é impedir criar instâncias "new"
  private constructor() {}

  // Um singleton deve sempre definir um "getter" disponibilizando a sua única instância
  public static get getInstance(): Time {
    if (!Time.#instance) {
      Time.#instance = new Time();
    }

    return Time.#instance;
  }

  // Regra de negócio
  public display() {
    const date = new Date();
    return date.toISOString();
  }
}

const time1 = Time.getInstance;
const time2 = Time.getInstance;

console.log(time1 === time2);
console.log(`${time1.display()}\n${time2.display()}`);
