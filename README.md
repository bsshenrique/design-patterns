![Static Badge](https://img.shields.io/badge/Node.js-LTS-brightgreen) ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/bsshenrique/design-patterns/main)

# Design Patterns
Design Patterns é um repositório composto por exemplos de padrões de projeto escritos em TypeScript.

Todos os exemplos são funcionais, teste da seguinte maneira:  
`node --import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));' script.ts`

Ou:  
`npm run build`  
`node build/script.ts`

## Padrões de Projetos
- Gang of Four
  - Creational
  - Structural
  - Behavioral
- Other
  - [Currying](other/currying.ts)
  - [Method Chaining](other/method-chaining.ts)
  - [Partial Application](other/partial-application.ts)

## Fonte
Todo conteúdo foi retirado de:  
[ChatGPT](https://chatgpt.com)  
[Wikipedia - Software design pattern](https://en.wikipedia.org/wiki/Software_design_pattern)  


