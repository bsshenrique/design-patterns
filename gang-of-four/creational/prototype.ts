// Prototype
// Especifica os tipos de objetos a serem criados usando uma instância protótipo e cria novos objetos copiando esse protótipo
//
// Quando usar
// Permite criar objetos a partir da clonagem de um objeto existente, em vez de instanciá-los diretamente com new
// O objetivo é permitir que objetos sejam criados de forma dinâmica e flexível, copiando as características de um modelo já existente
// Imagine um sistema em que, ao pressionar uma tecla de atalho, o usuário possa duplicar um objeto existente
// Se esse objeto foi criado de forma dinâmica, é mais simples que ele possua um método clone para se duplicar facilmente
//
// Elementos
// Prototype
// Concrete Prototype

// Prototype
// Declara o método de clonagem que deve ser implementado pelas classes
interface Prototype<T> {
  clone(): T;
}

// Concrete Prototype
// Implementa a interface prototype e define como a clonagem é feita
class Person implements Prototype<Person> {
  public id: string;
  public name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  // Atente-se a necessidade de uma shallow copy ou deep copy
  public clone(): Person {
    return new Person(this.id, this.name);
  }
}

// Client
// Solicita os clones
const first = new Person("1234", "Abcd");
const second = first.clone();
console.log(first.id);
console.log(first.name);
console.log(second.id);
console.log(second.name);
