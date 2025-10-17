// Decorator
// Anexa responsabilidades adicionais a um objeto dinamicamente
// Decorators fornecem uma alternativa flexível à subclasse para estender funcionalidades
//
// Cenário de uso
// Imagine um sistema de log em uma aplicação
// Nesse sistema, determinados componentes precisam de logs apenas com a hora, outros apenas a data e em outros tanto data como hora
// Uma forma bem fácil de atender a esse cenário é utilizando decorators
//
// Elementos
// Decorator
// Component
// Concrete Component
// Concrete Decorator

// Component
// Define a interface comum aos objetos que podem ter responsabilidades adicionadas dinamicamente
interface Logger {
  // Operações comuns aos decoradores
  log(log?: string): string;
}

// Concrete Component
// Representa o objeto base ao qual decoradores podem ser adicionados
class ConsoleLog implements Logger {
  private logger: string;

  constructor(logger: string) {
    this.logger = logger.concat(":");
  }
  // Implementação padrão das operações
  public log(log = ""): string {
    return `${this.logger} ${log}`;
  }
}

// Decorator
// Atua como classe base de todos os decoradores concretos, fornecendo acesso ao objeto componente encapsulado
class Decorator implements Logger {
  // Deve manter uma referência ao componente para possibilitar que ele seja encapsulado
  protected logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  // Também deve delegar as operações ao objeto que está decorando, logo, é necessário implementar a interface component
  public log(log = ""): string {
    return this.logger.log(log);
  }
}

// Concrete Decorator
// Estende o decorator e adiciona novas responsabilidades ao componente
class LogTime extends Decorator {
  // Um decorator pode interceptar, modificar ou validar o que for necessário antes ou depois da chamada do objeto encapsulado
  public log(log = ""): string {
    const time = new Date().toLocaleTimeString();
    // Pode-se acessar o objeto pai em vez de chamar o objeto encapsulado
    return `${time} | ${super.log(log)}`;
  }
}

// Concrete Decorator
class LogDate extends Decorator {
  public log(log = ""): string {
    const date = new Date().toLocaleDateString();
    return `${date} | ${super.log(log)}`;
  }
}

// Client
// O cliente deve instanciar o objeto da interface component
// Trabalhar com a interface componente garante que o cliente permaneça independente de classes concretas
// A quantidade de componentes concretos depende do context da aplicação, nesse caso apenas uma, mas nada impede que sejam vários
const systemLog = new ConsoleLog("INFO");
console.log(systemLog.log("Using the component interface"));

// Observe como os decoradores podem encapsular não apenas componentes simples, mas também outros decoradores
const systemLogTime = new LogTime(systemLog);
const systemLogDate = new LogDate(systemLogTime);
console.log(systemLogTime.log("Using one decorator"));
console.log(systemLogDate.log("Using two decorators"));
