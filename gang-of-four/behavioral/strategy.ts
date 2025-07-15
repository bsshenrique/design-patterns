/**
 * Strategy
 *
 * Permite que um objeto tenha seu comportamento alterado sem a necessidade de alterar o código.
 * As alterações comportamentais no objeto são feitas utilizando "estratégias".
 *
 * Aplicabilidade, problemas comuns resolvidos:
 * Comportamentos que precisam ser alterados de acordo com o contexto do programa.
 */

interface Person {
  id: string;
  name: string;
}

// Strategy
// Strategy define a Interface comum a todo concrete strategy
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
// O contexto não deve conhecer nenhuma estratégias concretas, apenas a interface Strategy
// A interface garante que ele seja compatível com qualquer estratégia
class Context {
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
  public sortPerson(person: Person[]) {
    return this.strategy.sort(person);
  }
}

const person: Person[] = [
  { id: "03", name: "AAA" },
  { id: "01", name: "BBB" },
  { id: "04", name: "CCC" },
  { id: "02", name: "DDD" },
];

const context = new Context(new SortById());
console.log(context.sortPerson(person));
context.setStrategy(new SortByName());
console.log(context.sortPerson(person));
