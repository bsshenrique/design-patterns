/**
 * Command
 *
 * Conceito
 * O objetivo do padrão é realizar solicitações (comandos) por meio de objetos.
 *
 * Implementação
 * Command            - Interface ou classe abstrata que declara o método execute;
 * Concrete Command   - Implementa o command e sabe qual ação específica realizar;
 * Receiver           - Sabe como realizar todas as ações de todos os concrete commands;
 * Invoker            - Solicitante, classe responsável por solicitar a execução de uma ação de um concrete command;
 * Client             - Associa um receiver a um concrete command e faz a solicitação pelo invoker.
 *
 * Cenário de uso
 * Imagine um sistema de controle de som onde diferentes botões do controle remoto executam comandos distintos, como aumentar ou diminuir o volume.
 */

// Command
interface Command {
  // Por convenção e visando garantir o SRP, apenas o método execute é declarado
  // Cada comando concreto pode encapsular uma ação específica
  execute(): void;
}

// Receiver
class Speaker {
  // O Receiver deve apenas saber como realizar as ações que serão solicitadas pelos comandos
  volumeUp(): void {
    console.log("+");
  }

  volumeDown(): void {
    console.log("-");
  }
}

// Concrete Command
class CommandVolumeUp implements Command {
  private speaker: Speaker;

  // Uma referência do receiver deve ser criada para que seja possível realizar a ação executada pelo comando
  constructor(speaker: Speaker) {
    this.speaker = speaker;
  }

  // Outras ações podem ser definidas nos comandos concretos, caso necessário
  public execute(): void {
    this.speaker.volumeUp();
  }
}

// Concrete Command
class CommandVolumeDown implements Command {
  private speaker: Speaker;

  constructor(speaker: Speaker) {
    this.speaker = speaker;
  }

  public execute(): void {
    this.speaker.volumeDown();
  }
}

// Invoker
class Control {
  private command: Command;

  constructor(command: Command) {
    this.command = command;
  }

  // A depender do contexto da aplicação, pode ser necessário alterar o comando
  setCommand(command: Command) {
    this.command = command;
  }

  // A função do invoker é solicitar as ações
  pressButton() {
    this.command.execute();
  }
}

// Client
const speaker = new Speaker();
const control = new Control(new CommandVolumeUp(speaker));
control.pressButton();
control.pressButton();
control.setCommand(new CommandVolumeDown(speaker));
control.pressButton();
control.pressButton();
