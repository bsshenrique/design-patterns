// Proxy
// Fornecer um substituto ou marcador para outro objeto a fim de controlar o acesso a ele
//
// Quando usar
// Imagine uma aplicação capaz de reproduzir vídeos em um hardware antigo e lento
// Um proxy poderia ser adicionado para alterar o comportamento do serviço de reprodução
//
// Elementos
// Proxy
// Real Subject
// Subject

// Subject
// Interface comum ao proxy e ao real subject
interface Media {
  play(): void;
}

// Real Subject
// Objeto real que contém a lógica necessária
class Video implements Media {
  private file: string;

  constructor(file: string) {
    this.file = file;
    this.openFile();
  }

  private openFile(): void {
    console.log(`Loading file: ${this.file}`);
  }

  play(): void {
    console.log(`Now playing: ${this.file}`);
  }
}

// Proxy
// Gerencia o acesso ao real subject, sendo utilizado em seu lugar e podendo implementar algum comportamento adicional
// Remote proxy, virtual proxy, protection proxy e smart reference (ou smart proxy) são tipos de proxies descritos pela GoF
class ProxyVideo implements Media {
  private file: string;
  // O proxy deve manter uma referência ao real subject
  private subject: Video | null;

  // A referência pode ser criada por meio de lazy-load ou permitindo que o cliente informe o real subject
  constructor(file: string) {
    this.file = file;
    this.subject = null;
  }

  play(): void {
    // Lazy loading
    if (this.subject === null) {
      this.subject = new Video(this.file);
    }
    this.subject.play();
  }
}

// Client
// O client pode trabalhar tanto com os serviços quanto com o proxy
const video = new Video("video.mp4");
video.play();

const proxy = new ProxyVideo("video.avi");
proxy.play();
