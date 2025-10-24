// Abstract Factory
// Fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas
//
// Quando usar
// O padrão deve ser usado quando existe a necessidade criar famílias de produtos relacionados, sem que exista o acoplamento de classes concretas
//
// Elementos
// Abstract Factory
// Abstract Product
// Concrete Product
// Concrete Factory

// Abstract Product
// Representa uma família de produtos
// Os produtos de uma família podem apresentar diversas variantes, sendo que toda variante deve seguir a mesma interface
interface Button {
  click(): string;
}

// Abstract Product
interface Background {
  show(): string;
}

// Abstract Factory
// Declara o conjunto de métodos que retornam os diferentes abstract products
interface ThemeFactory {
  createBackground(): Background;
  createButton(): Button;
}

// Concrete Product
// Representa uma variante dentro de uma família de produtos
// O produto de uma variante deve ser incompatível com o produto de outra variante
class DarkButton implements Button {
  public click() {
    return "A dark button.";
  }
}

// Concrete Product
class LightButton implements Button {
  public click() {
    return "A light button.";
  }
}

// Concrete Product
class DarkBackground implements Background {
  public show() {
    return "A dark background.";
  }
}

// Concrete Product
class LightBackground implements Background {
  public show() {
    return "A light background.";
  }
}

// Concrete Factory
// Produz a família de produtos (concrete products) pertencentes a uma variante (abstract product)
// Todos os produtos da família devem ser compatíveis
class DarkThemeFactory implements ThemeFactory {
  public createButton() {
    // Cada variante deve ser criado pela concrete factory correspondente
    return new DarkButton();
  }

  public createBackground() {
    return new DarkBackground();
  }
}

// Concrete Factory
class LightThemeFactory implements ThemeFactory {
  public createButton() {
    return new LightButton();
  }

  public createBackground() {
    return new LightBackground();
  }
}

// Client
// O código do cliente deve trabalhar apenas com elementos abstratos, abstract factory e abstract product
// Isso garante que seja possível manter a compatibilidade ao trabalhar com concrete factories
function themeFactory(factory: ThemeFactory) {
  const button = factory.createButton();
  const background = factory.createBackground();

  console.log(button.click());
  console.log(background.show());
}

// Trabalha-se apenas com concrete factories
themeFactory(new DarkThemeFactory());
themeFactory(new LightThemeFactory());
