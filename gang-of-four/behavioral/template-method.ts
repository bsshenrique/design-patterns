// Template Method
// Define o esqueleto de um algoritmo em uma operação, deixando alguns passos desse algoritmo para as subclasses
// O template method permite que as subclasses redefinam certos passos de um algoritmo sem mudar a estrutura do mesmo
//
// Quando usar
// Imagine um algoritmo capaz de gerar documentos
// O template method é útil para definir um esqueleto e alterar apenas o necessário de acordo com cada tipo de documento
//
// Elementos
// Abstract Class
// Concrete Class

// Abstract Class
// Define o template method, concrete operations, primitive operations e opcionalmente hooks
abstract class Document {
  // Template method
  // Sua função é implementar as lógica geral e fixa do algoritmo
  // Essa lógica deve ser fixa e nunca deverá ser alterada pelas subclasses
  processDocument(): void {
    this.open();
    this.write();
    this.setName();
    this.compress();
    this.validate();
    this.close();
  }

  // Concrete operation
  // Método comum para todas as variações do algoritmo
  protected close(): void {
    console.log("close");
  }

  // Concrete operation
  protected open(): void {
    console.log("open");
  }

  // Hook
  // Método definido com uma implementação padrão ou vazia
  // Podem ser sobrescritos pelas subclasses, mas não é obrigatório
  protected compress(): void {
    console.log("No compression applied");
  }

  // Hook
  protected setName(): void {
    console.log("new document");
  }

  // Primitive operation
  // Método abstrato que deve ser implementado pelas subclasses para permitir personalização
  protected abstract validate(): void;

  // Primitive operation
  protected abstract write(): void;
}

// Concrete Class
// Definem o comportamento variável por meio de implementações personalizadas de primitive operations e hooks
class DocumentPdf extends Document {
  protected override compress(): void {
    console.log("Compression applied");
  }

  protected validate(): void {
    console.log("PDF validated");
  }

  protected write(): void {
    console.log("PDF created");
  }
}

// Concrete Class
class DocumentTxt extends Document {
  protected override setName(): void {
    console.log("document.txt");
  }

  protected validate(): void {
    console.log("TXT validated");
  }

  protected write(): void {
    console.log("TXT created");
  }
}

const pdf = new DocumentPdf();
const txt = new DocumentTxt();

pdf.processDocument();
txt.processDocument();
