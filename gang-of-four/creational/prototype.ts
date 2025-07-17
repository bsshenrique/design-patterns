/**
 * Prototype
 *
 * Conceito
 * Permite criar objetos a partir da clonagem de um objeto existente, em vez de instanciá-los diretamente com new.
 * O objetivo é permitir que objetos sejam criados de forma dinâmica e flexível, copiando as características de um modelo já existente.
 *
 * Implementação
 * Prototype            Classe abstrata base ou interface com um método "clone";
 * Concrete Prototype   Classe concreta que implementa a interface prototype e define como a clonagem é feita.
 *
 * Cenário de uso
 * Imagine um sistema em que, ao pressionar uma tecla de atalho, o usuário deseja duplicar um objeto já criado em tempo de execução.
 * Se esse objeto foi criado de forma dinâmica, é mais simples que ele possua um método "clone" para se duplicar facilmente.
 */

// Prototype
interface Prototype<T> {
  clone(): T;
}

// Concrete Prototype
class Person implements Prototype<Person> {
  public id: string;
  public name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  public clone() {
    return new Person(this.id, this.name);
  }
}

const first = new Person("1234", "Abcd");
const second = first.clone();
console.log(first.id);
console.log(first.name);
console.log(second.id);
console.log(second.name);
