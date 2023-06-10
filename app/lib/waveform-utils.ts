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

export const markInPoint = (
  peaks: PeaksInstance | undefined,
  setInPoint: React.Dispatch<React.SetStateAction<number | undefined>>
) => {
  setInPoint(peaks!.player.getCurrentTime());
};

export const markOutPoint = (
  peaks: PeaksInstance | undefined,
  setOutPoint: React.Dispatch<React.SetStateAction<number | undefined>>
) => {
  setOutPoint(peaks!.player.getCurrentTime());
};

export const addSegment = (
  peaks: PeaksInstance | undefined,
  audioUrl: string,
  segments: Segment[],
  setSegments: React.Dispatch<React.SetStateAction<Segment[]>>
) => {
  const playHead = peaks!.player.getCurrentTime();
  const filename = audioUrl.substring(0, audioUrl.indexOf("."));
  const segmentId = `${peaks!.segments.getSegments().length + 1}-${filename}`;

  peaks?.segments.add({
    id: segmentId,
    startTime: playHead,
    endTime: playHead + 5,
    color: "#D92027",
    customAttribute: `This is clip ${segmentId}`,
  });
};

export const getAllSegments = (
  peaks: PeaksInstance | undefined,
  segments: Segment[],
  setSegments: React.Dispatch<React.SetStateAction<Segment[]>>
) => {
  setSegments(peaks!.segments.getSegments());
};
