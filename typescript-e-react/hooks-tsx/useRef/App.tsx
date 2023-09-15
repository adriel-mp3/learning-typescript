/**
  # - Adicione funcionalidades ao player de vídeo:
  1 - Use um estado reativo para verificar se o vídeo está tocando ou não.
  2 - Função para avançar o vídeo em +2s.
  3 - Função para alterar o playbackRate do vídeo.
  4 - Função para entrar/sair do modo pictureInPicture.
  5 - Função para alternar o som (mudo/não mudo) do vídeo.
 */
import React from "react";
import videoSrc from "./video.mp4";

function App() {
  const [paused, setPaused] = React.useState(true);
  const video = React.useRef<HTMLVideoElement>(null);

  function togglePlayPauseVideo() {
    if (paused) {
      video.current?.play();
      return setPaused(false);
    }
    video.current?.pause();
    return setPaused(true);
  }

  function handleSkip() {
    if (video.current) {
      video.current.currentTime += 2;
    }
  }

  function setPlaybackRate(rate: number) {
    if (video.current) {
      video.current.playbackRate = rate;
    }
  }

  async function togglePictureInPicture() {
    if (document.pictureInPictureElement) {
      return await document.exitPictureInPicture();
    }
    return await video.current?.requestPictureInPicture();
  }

  function toggleMute() {
    if (video.current) {
      return (video.current.muted = !video.current.muted);
    }
  }

  return (
    <div>
      <div className="flex">
        <button onClick={togglePlayPauseVideo}>
          {paused ? "Play" : "Pause"}
        </button>
        <button onClick={handleSkip}>+ 2s</button>
        <button onClick={() => setPlaybackRate(1)}>1x</button>
        <button onClick={() => setPlaybackRate(2)}>2x</button>
        <button onClick={togglePictureInPicture}>PiP</button>
        <button onClick={toggleMute}>M</button>
      </div>
      <video ref={video} src={videoSrc}></video>
      {paused ? "Pausado" : "Reproduzindo"}
    </div>
  );
}

export default App;
