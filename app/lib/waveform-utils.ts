import { PeaksInstance, Segment } from "peaks.js";
import { useState } from "react";
import { SegmentProps } from "@/app/types";

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
  audioUrl: string,
  segmentNum: number,
  setSegmentNum: React.Dispatch<React.SetStateAction<number>>
) => {
  const playHead = peaks!.player.getCurrentTime();
  const filename = audioUrl.substring(0, audioUrl.indexOf("."));
  peaks?.segments.add({
    id: `segment-${segmentNum}-${filename}`,
    startTime: playHead,
    endTime: playHead + 5,
    color: "#D92027",
    customAttribute: `This is segment ${segmentNum} for audio track ${filename}`,
  });
  setSegmentNum(segmentNum + 1);
};

export const getAllSegments = (
  peaks: PeaksInstance | undefined,
  setSegments: React.Dispatch<React.SetStateAction<Segment[]>>
) => {
  setSegments(peaks!.segments.getSegments());
};
