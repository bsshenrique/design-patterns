![Static Badge](https://img.shields.io/badge/Node.js-LTS-brightgreen) ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/bsshenrique/design-patterns/main)

# Design Patterns
Design Patterns é um repositório composto por exemplos de padrões de projeto escritos em TypeScript.

Todos os exemplos são funcionais, teste da seguinte maneira:  
`node --experimental-strip-types --experimental-transform-types script.ts`

Ou:  
`npm run build`  
`node build/script.ts`

## Padrões de Projetos
- Gang of Four
  - Creational
    - [Factory Method](gang-of-four/creational/factory-method.ts)
    - [Singleton](gang-of-four/creational/singleton.ts)
  - Structural
  - Behavioral
    - [Strategy](gang-of-four/behavioral/strategy.ts)
- Other
  - [Currying](other/currying.ts)
  - [Function Composition](other/function-composition.ts)
  - [Method Chaining](other/method-chaining.ts)
  - [Partial Application](other/partial-application.ts)

## Fonte
Todo conteúdo foi retirado de:  
[ChatGPT](https://chatgpt.com)  
[Refactoring.Guru](https://refactoring.guru)
[Wikipedia - Software design pattern](https://en.wikipedia.org/wiki/Software_design_pattern)
