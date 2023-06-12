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
  inPoint: number,
  setInPoint: React.Dispatch<React.SetStateAction<number>>,
  outPoint: number,
  setOutPoint: React.Dispatch<React.SetStateAction<number>>
) => {
  if (peaks!.player.getCurrentTime() < outPoint && outPoint > 0) {
    setInPoint(peaks!.player.getCurrentTime());
  } else {
    setOutPoint(0);
    setInPoint(peaks!.player.getCurrentTime());
  }
  setInPoint(peaks!.player.getCurrentTime());
};

export const markOutPoint = (
  peaks: PeaksInstance | undefined,
  inPoint: number,
  setInPoint: React.Dispatch<React.SetStateAction<number>>,
  outPoint: number,
  setOutPoint: React.Dispatch<React.SetStateAction<number>>
) => {
  if (peaks!.player.getCurrentTime() < inPoint && inPoint > 0) {
    setOutPoint(0);
  } else {
    setOutPoint(peaks!.player.getCurrentTime());
  }
};

export const addSegment = (
  peaks: PeaksInstance | undefined,
  audioUrl: string,
  segments: Segment[],
  setSegments: React.Dispatch<React.SetStateAction<Segment[]>>,
  inPoint: number,
  outPoint: number
) => {
  const filename = audioUrl.substring(0, audioUrl.indexOf("."));
  const segmentId = `${peaks!.segments.getSegments().length + 1}-${filename}`;

  if (inPoint < outPoint) {
    peaks?.segments.add({
      id: segmentId,
      startTime: inPoint,
      endTime: outPoint,
      color: "#D92027",
      customAttribute: `This is clip ${segmentId}`,
    });
  } else {
  }
};

export const getAllSegments = (
  peaks: PeaksInstance | undefined,
  segments: Segment[],
  setSegments: React.Dispatch<React.SetStateAction<Segment[]>>
) => {
  setSegments(peaks!.segments.getSegments());
};
