/**
 * Strategy
 *
 * Conceito
 * Permite definir uma família de algoritmos, encapsulá-los e torná-los intercambiáveis.
 * Dessa forma, o comportamento de um objeto pode ser alterado em tempo de execução sem modificar seu código.
 *
 * Implementação
 * Strategy           - Interface obrigatória a todos algoritmos;
 * Concrete Strategy  - Implementam os algoritmos necessários;
 * Context            - Utiliza uma referência a um objeto strategy para que seja possível executar qualquer estratégia.
 *
 * Cenário de uso
 * Imagine um programa com a necessidade de organizar uma tabela de pessoas.
 * Ao em vez de segmentar o programa com IF, pode-se alterar o comportamento utilizando diferentes estratégias.
 */

interface Person {
  id: string;
  name: string;
}

// Strategy
interface Strategy {
  // Operações comuns aos algoritmos de estratégia
  sort(person: Person[]): Person[];
}

// Concrete Strategy
class SortById implements Strategy {
  sort(person: Person[]): Person[] {
    return person.slice().sort((a, b) => a.id.localeCompare(b.id));
  }
}

// Concrete Strategy
class SortByName implements Strategy {
  sort(person: Person[]): Person[] {
    return person.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
}

// Context
class Context {
  // O contexto não deve conhecer nenhuma estratégias concretas, apenas a interface strategy
  // Ele deve ser compatível com qualquer estratégia
  private strategy: Strategy;

  // Estratégia usada para o objeto ser inicializado
  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  // Capacidade de alterar o comportamento, alterar de estratégia
  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  // A interface strategy garante que qualquer estratégia seja compatível com a execução do algoritmo
  public sort(person: Person[]) {
    return this.strategy.sort(person);
  }
}

const person: Person[] = [
  { id: "03", name: "AAA" },
  { id: "01", name: "CCC" },
  { id: "04", name: "DDD" },
  { id: "02", name: "BBB" },
];

const context = new Context(new SortById());
console.log(context.sort(person));
context.setStrategy(new SortByName());
console.log(context.sort(person));
