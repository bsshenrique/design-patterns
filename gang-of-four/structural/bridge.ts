// Bridge
// Desacopla uma abstração de sua implementação, de modo que as duas possam variar independentemente
//
// Seu propósito é criar duas hierarquias, uma de implementação e outra de abstração
// Uma hierarquia deve ser independente da outra hierarquia
//
// Elementos
// Abstraction
// Concrete Implementation
// Implementation
// Refined Abstraction

// Implementation
// Métodos comuns a toda classe concreta de implementação
// Fornece operações primitivas
interface Device {
  // Operação primitiva
  powerOff(): void;
  powerOn(): void;
  isOn(): boolean;
}

// Abstraction
// Implementa o comportamento de "controle" entre as hierarquias
// Fornece operações de alto nível baseadas nas operações primitivas
// Não é necessário implementar a interface implementation, a classe de abstração pode ser inteiramente diferente
class RemoteControl {
  // Deve manter a referência ao objeto da hierarquia de implementação, delegando a ele todo o trabalho
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  // Operação de alto nível
  togglePower() {
    if (this.device.isOn()) {
      this.device.powerOff();
    } else {
      this.device.powerOn();
    }
  }
}

// Refined Abstraction
// Caso necessário a abstração pode ser estendida e implementar comportamentos mais refinados
class AdvancedRemoteControl extends RemoteControl {
  // ...
}

// Concrete Implementation
// Cada implementação concreta corresponde a um objeto concreto necessário ao domínio da aplicação
class Sound implements Device {
  private power = false;

  isOn(): boolean {
    return this.power;
  }

  powerOff(): void {
    this.power = false;
  }

  powerOn(): void {
    this.power = true;
    console.log("The Bluetooth device is ready to pair");
  }
}

// Concrete Implementation
class Monitor implements Device {
  private power = false;

  isOn(): boolean {
    return this.power;
  }

  powerOff(): void {
    this.power = false;
  }

  powerOn(): void {
    this.power = true;
    console.log("Hello world!");
  }
}

// O código do cliente deve depender apenas da hierarquia de abstração, dessa forma, ele irá aceitar qualquer implementação
function clientCode(abstraction: RemoteControl) {
  abstraction.togglePower();
}

// Apenas na inicialização dos objetos o cliente deve ter ciência da hierarquia de implementação
const soundImplementation = new Sound();
const soundAbstraction = new RemoteControl(soundImplementation);
clientCode(soundAbstraction);
