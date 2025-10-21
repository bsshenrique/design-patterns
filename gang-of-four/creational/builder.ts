// Builder
// Separa a construção de um objeto complexo de sua representação, de modo que o mesmo processo de construção possa criar diferentes representações
//
// Quando usar
// O padrão builder só faz sentido quando podem existir diferentes produtos com interfaces distintas
// Os builders nem sempre vão seguir a mesma interface, tornando o padrão diferente dos outros padrões de criação
//
// Elementos
// Builder
// Concrete Builder
// Director
// Product

// Builder
// Define a interface das etapas de construção do produto
// Comum a todos os construtores concretos
interface Builder {
  buildBody(): void;
  buildCss(): void;
  buildHtml(): void;
}

// Product
// Produtos construídos pelos construtores concretos
// Não é obrigatório que sigam uma mesma interface
class LandingPage {
  html: string[];

  constructor() {
    this.html = [];
  }

  page(html: string) {
    this.html.push(html);
  }
}

// Product
class ProfilePage {
  // Implementação necessária para esse tipo de produto
}

// Concrete Builder
// Cada construtor concreto provê uma diferente implementação das etapas de construção
// Também podem produzir produtos que não seguem a interface comum
class LandingPageBuilder implements Builder {
  private product: LandingPage;

  // Uma instância "limpa" do construtor deve trabalhar com um produto "limpo"
  constructor() {
    this.product = new LandingPage();
  }

  buildBody(): void {
    this.product.page("<p>Hello World!</p>");
  }

  buildCss(): void {
    this.product.page("<style>a { color: #838383; }</style>");
  }

  buildHtml(): void {
    let tag = this.product.html.length ? "<html>" : "</html>";
    this.product.page(tag);
  }

  // Construtores concretos podem criar produtos com interfaces distintas, logo, devem ter seu próprio método para entregar do produto
  render() {
    return this.product.html.join("\n");
  }

  // É comum, mas não mandatório, a implementação de um método "reset" responsável por limpar o produto após a entrega
  reset(): void {
    this.product = new LandingPage();
  }
}

// Concrete Builder
class ProfilePageBuilder implements Builder {
  private product: ProfilePage;

  constructor() {
    this.product = new ProfilePage();
  }

  buildBody(): void {
    // Implementação específica para o construtor concreto
  }

  buildCss(): void {
    // ...
  }

  buildHtml(): void {
    // ...
  }
}

// Director
// Orquestrador da ordem da chamada das etapas de construção
// É uma classe opcional, porém, caso não seja implementada, o cliente deve ser capaz de controlar os construtores concretos
class Director {
  private builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  // O director deve ser capaz de orquestrar todos os construtores concretos utilizando a mesma ordem
  buildPage() {
    this.builder.buildHtml();
    this.builder.buildCss();
    this.builder.buildBody();
    this.builder.buildHtml();
  }

  // O director pode oferecer diferentes variações das etapas de construção
  buildPageCss() {
    this.builder.buildHtml();
    this.builder.buildCss();
    this.builder.buildHtml();
  }
}

// Client
const page = new LandingPageBuilder();
const director = new Director(page);

director.buildPage();
console.log(page.render());
page.reset();

director.buildPageCss();
console.log(page.render());
page.reset();
