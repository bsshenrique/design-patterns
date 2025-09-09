/**
 * # Chain of Responsibility
 *
 * ## Conceito
 * Evita acoplar o remetente de uma solicitação ao seu receptor, dando a mais de um objeto a chance de tratar a solicitação.
 * Encadeia os objetos receptores e passa a solicitação ao longo da cadeia até que um objeto a trate.
 *
 * ## Implementação
 * Handler            Interface
 * Interface comum a todos os concrete handlers.
 * Deve definir o método para lidar com solicitações, e opcionalmente o método para encaminhar solicitações.
 *
 * Concrete Handler   Classe
 * Lida com as solicitações de sua responsabilidade ou, se não for sua responsabilidade, passa para um próximo handler.
 *
 * Client
 * Deve ter a capacidade de enviar uma requisição para qualquer handler, não apenas para o primeiro da cadeia.
 *
 * ## Cenário de uso
 * Imagine uma aplicação com níveis de suporte.
 * Se o nível de suporte mais simples não for capaz de resolver, o pedido deve ser enviado aos níveis mais avançados.
 */

// Handler
interface Handler {
  handle(level: string): string;
  // Um método next tem como propósito criar o comportamento de encadeamento
  // A implementação do método visa garantir a flexibilidade de escolha ao cliente
  next(handler: Handler): Handler;
}

// Classe base opcional
// Funciona como um boilerplate comum a todo concrete handler
abstract class BaseHandler implements Handler {
  private nextHandler: Handler | null = null;

  // Uma classe base normalmente implementa o comportamento padrão de passar a solicitação para outro handler
  public handle(level: string): string {
    if (this.nextHandler) {
      return this.nextHandler.handle(level);
    }

    return "No support available.";
  }

  public next(handler: Handler): Handler {
    this.nextHandler = handler;

    return handler;
  }
}

// Concrete Handler
class HelpDeskHandler extends BaseHandler {
  public handle(level: string) {
    if (level === "help_desk") {
      return `General support.`;
    }
    // Caso o handler não seja o responsável pela solicitação, ela será passada ao próximo handler
    return super.handle(level);
  }
}

class TechnicalSupportHandler extends BaseHandler {
  public handle(level: string) {
    if (level === "technical_support") {
      return `Technical support.`;
    }

    return super.handle(level);
  }
}

class AdvancedSupportHandler extends BaseHandler {
  public handle(level: string) {
    if (level === "advanced_support") {
      return `Advanced support.`;
    }

    return super.handle(level);
  }
}

const helpDesk = new HelpDeskHandler();
const technicalSupport = new TechnicalSupportHandler();
const advancedSupport = new AdvancedSupportHandler();

// A cadeia de handlers é construída conforme necessidade do cliente.
// Funciona basicamente assim:
// helpDesk define que technicalSupport é seu próximo handler e retorna o handler technicalSupport;
// technicalSupport define que advancedSupport é seu próximo handler e retorna advancedSupport;
// E assim sucessivamente.
// Graça a esse comportamento, advancedSupport seria capaz de definir seu próximo handler
helpDesk.next(technicalSupport).next(advancedSupport);

console.log(helpDesk.handle("help_desk"));
console.log(helpDesk.handle("technical_support"));
console.log(helpDesk.handle("advanced_support"));
console.log(helpDesk.handle("xyz"));
