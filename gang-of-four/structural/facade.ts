/**
 * # Facade
 *
 * ## Conceito
 * Fornece uma interface unificada para um conjunto de interfaces em um subsistema.
 * O Facade define uma interface de nível mais alto que torna o subsistema mais fácil de usar.
 *
 * ## Implementação
 * Facade     Classe
 * Encapsula a complexidade e a lógica de coordenação de classes complexas.
 *
 * Subsystem  Classe
 * Classe complexa que realizam o trabalho real.
 *
 * Client
 * Utilizam o facade para interagir com o sistema
 *
 * ## Cenário de uso
 * Imagine um sistema com duas classes, uma para processar áudio e outra para vídeo.
 * Para manter cada dessas classes com sua própria responsabilidade e desacoplada do cliente, pode-se criar um face.
 * Com isso, o cliente interage apenas com o facade, sem precisar conhecer os detalhes internos das classes.
 */

// Subsystem
class Video {
  private file: string;

  constructor(file: string) {
    this.file = file;
  }

  public playVideo() {
    console.log(this.file);
  }
}

// Subsystem
class Audio {
  private file: string;

  constructor(file: string) {
    this.file = file;
  }

  public playAudio() {
    console.log(this.file);
  }
}

interface Facade {
  playMedia(): void;
}

// Facade
class MediaPlayer implements Facade {
  private audio: Audio | null;
  private video: Video | null;

  constructor(audio: Audio | null = null, video: Video | null = null) {
    this.audio = audio;
    this.video = video;
  }

  // O facade atua para simplificar o uso classes internas sem alteração de código
  playMedia(): void {
    if (this.audio) {
      this.audio?.playAudio();
    }
    if (this.video) {
      this.video?.playVideo();
    }
  }
}

const audio = new Audio("file.audio");
const video = new Video("file.video");
// Subsystems podem ser usados diretamente pelos clientes, mas normalmente não é desejável
// O facade reduz o acoplamento entre cliente e o sistema interno, escondendo a complexidade e expondo o necessário
const mediaPlayer = new MediaPlayer(audio, video);
mediaPlayer.playMedia();
