// Adapter
// Converte a interface de uma classe em outra interface esperada pelos clientes
// O Adapter permite que classes com interfaces incompatíveis trabalhem juntas
//
// Permite adaptar uma interface incompatível e já em uso em uma interface compatível com a exigida pelo cliente
//
// Quando usar
// Imagine um monitor que oferece suporte apenas para entrada HDMI e um dispositivo cliente que oferece apenas saída VGA
// Para que os dois possam se comunicar, será necessário adaptar a saída VGA para a entrada HDMI
//
// Elementos
// Adaptee
// Adapter
// Target

// Interface usada pelo adaptee, a classe monitor
// Incompatível com o que o cliente exige, a interface vga
interface Hdmi {
  connect(): void;
  display(): void;
}

// Target
// Interface exigida pelo cliente
interface Vga {
  connect(): void;
  display(): void;
}

// Adaptee
// Classe existente cuja interface é incompatível com a interface que o cliente exige
class Monitor implements Hdmi {
  public connect(): void {
    console.log("Using HDMI");
  }

  public display(): void {
    console.log("Hello, World!");
  }
}

// Adapter
// Responsável por tornar duas interfaces compatíveis, a interface do adaptee com a interface target
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
// Exige a interface target
// Sem o uso do adapter
const monitor = new Monitor();
monitor.connect();
monitor.display();

// Utilizando o adapter
const adapter = new Adapter(monitor);
adapter.connect();
adapter.display();
