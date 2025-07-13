/**
 * Factory Method
 *
 * Aplicabilidade, problemas comuns resolvidos:
 * OCP (SOLID): Adicionar novas funcionalidades sem alterar o código existente;
 * Padronizar o que deve ser criado utilizando o factory method;
 * Polimorfismo para evitar condicionais e lógicas de difícil manutenção.
 */

// Product
// Produto abstrato
// Interface para os objetos criados pelo factory method
// Define as operações que todo concrete product deve implementar
interface Arquivo {
  criar(): string;
  ler(): string;
}

// Concrete Product
// Produto concreto
// Implementação específica para um product
class ArquivoPDF implements Arquivo {
  criar(): string {
    return "myPDF.pdf";
  }

  ler(): string {
    return "My PDF content";
  }
}

// Concrete Product
class ArquivoTXT implements Arquivo {
  criar(): string {
    return "myTXT.txt";
  }

  ler(): string {
    return "My TXT content";
  }
}

// Creator
// Classe criadora abstrata
// Classe que contém o factory method que retorna um product
abstract class Documento {
  // Factory Method
  // Deve ser implementada pelo concrete creator e retornar um objeto product
  abstract criarDocumento(): Arquivo;

  // É comum que o creator contenha alguma lógica de negócio que dependa do product
  lerDocumento(): string {
    const documento = this.criarDocumento();
    return documento.ler();
  }
}

// Concrete Creator
// Um concrete creator deve sobrescrever o factory method
class DocumentoPDF extends Documento {
  // O objetivo é retornar o objeto concrete product correspondente
  // Assinatura deve ser mantida para que o concrete creator permaneça independente
  criarDocumento(): Arquivo {
    return new ArquivoPDF();
  }
}

// Concrete Creator
class DocumentoTXT extends Documento {
  criarDocumento(): Arquivo {
    return new ArquivoTXT();
  }
}

// O uso se baseia em concrete creators
// Ou seja, são criados produtos específicos
const pdf = new DocumentoPDF();
const txt = new DocumentoTXT();

console.log(pdf.lerDocumento());
console.log(pdf.criarDocumento().criar());
console.log(pdf.criarDocumento().ler());

console.log(txt.lerDocumento());
console.log(txt.criarDocumento().criar());
console.log(txt.criarDocumento().ler());
