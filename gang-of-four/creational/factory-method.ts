/**
 * # Factory Method
 *
 * ## Conceito
 * Define uma interface para a criação de um objeto, mas permite que as subclasses decidam qual classe instanciar.
 * O Factory Method permite adiar a instanciação para as subclasses.
 *
 * ## Implementação
 * Product            Classe Abstrata | Interface
 * Interface comum aos produtos concretos que serão criados pelo factory method;
 *
 * Concrete Product   Classe
 * Implementações concretas do produto, representam os objetos reais criados pelo factory method.
 *
 * Creator            Classe Abstrata  | Interface
 * Define o factory method.
 *
 * Concrete Creator   Classe
 * Implementa o factory method e retorna um produto concreto.
 *
 * Client
 * Utiliza o criador concreto para obter os produtos concretos.
 *
 * ## Cenário de uso
 * Imagine um sistema que precise manipular diferentes tipos de arquivos (PDF, TXT, etc.).
 * Se o sistema instanciasse diretamente os produtos concretos, resultaria em um forte acoplamento entre o cliente e as classes específicas.
 * O padrão resolve esse problema ao definir um factory method em uma classe abstrata ou interface, o creator.
 * As subclasses implementam o factory method e decidem qual produto concreto criar.
 * Isso permite estender o sistema criando novos produtos concretos sem modificar o código do cliente.
 */

// Product
interface MyFile {
  // Operações que todo concrete product deve implementar
  create(): string;
  read(): string;
}

// Concrete Product
class MyFilePdf implements MyFile {
  create(): string {
    return "myPDF.pdf";
  }

  read(): string {
    return "My PDF content";
  }
}

// Concrete Product
class MyFileTxt implements MyFile {
  create(): string {
    return "myTXT.txt";
  }

  read(): string {
    return "My TXT content";
  }
}

// Creator
abstract class Document {
  // Factory Method
  abstract createDocument(): MyFile;

  // O creator pode fornecer uma implementação padrão que utiliza o factory method
  readDocument(): string {
    const documento = this.createDocument();
    return documento.read();
  }
}

// Concrete Creator
class DocumentPdf extends Document {
  // Um concrete creator deve sobrescrever o factory method e retornar o objeto concrete product correspondente
  // A assinatura deve ser mantida para que o concrete creator permaneça independente
  createDocument(): MyFile {
    return new MyFilePdf();
  }
}

// Concrete Creator
class DocumentTxt extends Document {
  createDocument(): MyFile {
    return new MyFileTxt();
  }
}

// O uso pelo cliente se baseia em concrete creators
// Ou seja, são criados produtos específicos
const genericPdf = new DocumentPdf();
const genericTxt = new DocumentTxt();

// Utilizando a implementação padrão oferecida pelo creator
console.log(genericPdf.readDocument());
console.log(genericTxt.readDocument());

// Utilizando a implementação específica
const concretePdf = genericPdf.createDocument();
const concreteTxt = genericTxt.createDocument();
console.log(concretePdf.create());
console.log(concretePdf.read());
console.log(concreteTxt.create());
console.log(concreteTxt.read());
