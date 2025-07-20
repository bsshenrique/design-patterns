/**
 * Adapter
 *
 * Conceito
 * Permite adaptar uma interface incompatível em uma interface compatível para um cliente.
 *
 * Implementação
 * Adaptee  - Classe existente cuja interface é incompatível com a interface target;
 * Target   - Interface exigida pelo cliente;
 * Adapter  - Classe responsável por tornar duas interfaces compatíveis, a interface do adaptee com a interface target;
 * Client   - Classe que exige a interface target.
 *
 * Cenário de uso
 * Imagine um monitor que oferece suporte apenas para entrada HDMI e um dispositivo cliente que oferece apenas saída VGA.
 * Para que os dois possam se comunicar, será necessário adaptar a saída VGA para a entrada HDMI.
 */

// Interface usada pelo adaptee
// Incompatível com o que o cliente exige
interface Hdmi {
  connect(): void;
  display(): void;
}

// Target
interface Vga {
  connect(): void;
  display(): void;
}

// Adaptee
class Monitor implements Hdmi {
  public connect(): void {
    console.log("Using HDMI");
  }

  public display(): void {
    console.log("Hello, World!");
  }
}

// Adapter
class Adapter implements Vga {
  private adaptee: Hdmi;

  constructor(adaptee: Hdmi) {
    this.adaptee = adaptee;
  }

  public connect(): void {
    console.log("Using VGA to HDMI adapter");
    this.adaptee.connect();
  }

  public display(): void {
    this.adaptee.display();
  }
}

// Client
// Sem o uso do adapter
const monitor = new Monitor();
monitor.connect();
monitor.display();

// Client
// Utilizando o adapter
const adapter = new Adapter(monitor);
adapter.connect();
adapter.display();
