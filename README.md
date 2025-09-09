![Static Badge](https://img.shields.io/badge/Node.js-LTS-brightgreen) ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/bsshenrique/design-patterns/main)

# Design Patterns
Design Patterns é um repositório composto por exemplos de padrões de projeto escritos em TypeScript.

Todos os exemplos são funcionais, teste da seguinte maneira:  
`node --experimental-transform-types script.ts`

Ou:  
`npm run build`  
`node build/script.ts`

## Padrões de Projetos
- Gang of Four
  - Creational
    - [Factory Method](gang-of-four/creational/factory-method.ts)
    - [Prototype](gang-of-four/creational/prototype.ts)
    - [Singleton](gang-of-four/creational/singleton.ts)
  - Structural
    - [Adapter](gang-of-four/structural/adapter.ts)
    - [Decorator](gang-of-four/structural/decorator.ts)
    - [Facade](gang-of-four/structural/facade.ts)
  - Behavioral
    - [Command](gang-of-four/behavioral/command.ts)
    - [Chain of Responsibility](gang-of-four/behavioral/chain-of-responsibility.ts)
    - [State](gang-of-four/behavioral/state.ts)
    - [Strategy](gang-of-four/behavioral/strategy.ts)
    - [Template Method](gang-of-four/behavioral/template-method.ts)
- Other
  - [Currying](other/currying.ts)
  - [Function Composition](other/function-composition.ts)
  - [Method Chaining](other/method-chaining.ts)
  - [Partial Application](other/partial-application.ts)

## Fonte
Todo conteúdo foi retirado de:  
[ChatGPT](https://chatgpt.com)  
[GeeksforGeeks](https://www.geeksforgeeks.org/system-design/software-design-patterns/)  
[Refactoring.Guru](https://refactoring.guru/design-patterns)  
[Wikipedia - Software design pattern](https://en.wikipedia.org/wiki/Software_design_pattern)
