// State
// Permite que um objeto altere seu comportamento quando seu estado interno muda
// O objeto parecerá ter mudado sua classe
//
// O padrão utiliza classes chamadas de estados concretos para representar os possíveis estados
//
// Quando usar
// Imagine um programa utilizado para gerenciar um sinal de trânsito
// Nesse sistema, o semáforo alterna continuamente entre os estados verde, amarelo e vermelho
//
// Elementos
// Concrete State
// Context
// State

// State
// Define a interface comum a todos os estados concretos
interface State {
  changeColor(context: TrafficSignal): void;
}

// Concrete State
// Implementa a interface state, definindo comportamentos específicos para um estado concreto
class StateGreen implements State {
  // Um estado concreto deve implementar os comportamentos associados ao estado representado
  changeColor(context: TrafficSignal): void {
    console.log("Yellow Signal!");
    // As transições são feitas delegando ao estado atual o controle para decidir quando e como mudar de estado
    context.setState(new StateYellow());
  }
}

// Concrete State
class StateRed implements State {
  changeColor(context: TrafficSignal): void {
    console.log("Green Signal!");
    context.setState(new StateGreen());
  }
}

// Concrete State
class StateYellow implements State {
  changeColor(context: TrafficSignal): void {
    console.log("Red Signal!");
    context.setState(new StateRed());
  }
}

// Context
// Objeto que muda de comportamento conforme o estado em que se encontra
class TrafficSignal {
  // O contexto deve manter a referência ao atual estado
  private state: State;

  constructor(state: State) {
    this.state = state;
  }

  change() {
    this.state.changeColor(this);
  }

  // O contexto deve permitir que o estado atual decida quando e como trocar de estado
  setState(state: State) {
    this.state = state;
  }
}

// Client
const trafficSignal = new TrafficSignal(new StateRed());
// Como é possível notar, o padrão é bem parecido com o conceito de Finite-State Machine (FSM)
trafficSignal.change();
trafficSignal.change();
trafficSignal.change();
trafficSignal.change();
trafficSignal.change();
trafficSignal.change();
