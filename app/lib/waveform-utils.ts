import { PeaksInstance } from "peaks.js";

export const PlayPauseAudio = (
  peaks: PeaksInstance | undefined,
  isPlaying: boolean,
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!isPlaying) {
    peaks?.player.play();
    setIsPlaying(true);
  } else {
    peaks?.player.pause();
    setIsPlaying(false);
  }
};

export const zoomIn = (peaks: PeaksInstance | undefined) => {
  peaks?.zoom.zoomIn();
};

export const zoomOut = (peaks: PeaksInstance | undefined) => {
  peaks?.zoom.zoomOut();
};
