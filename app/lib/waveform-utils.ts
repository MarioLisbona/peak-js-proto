import { PeaksInstance } from "peaks.js";
import { useState } from "react";

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

export const addSegment = (
  peaks: PeaksInstance | undefined,
  segmentNum: number,
  setSegmentNum: React.Dispatch<React.SetStateAction<number>>
) => {
  const playHead = peaks!.player.getCurrentTime();

  peaks?.segments.add({
    id: `segment-${segmentNum}`,
    startTime: playHead,
    endTime: playHead + 5,
    color: "#orange",
    customAttribute: `This is a custom value for segment ${segmentNum}`,
  });
  setSegmentNum(segmentNum + 1);
};

export const getAllSegments = (peaks: PeaksInstance | undefined) => {
  const segments = peaks?.segments.getSegments();

  console.log(segments);
};
