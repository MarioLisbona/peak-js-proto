"use client";

import { Flex, Button, Text } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState, useMemo } from "react";
import Peaks, { PeaksInstance, PeaksOptions, Segment } from "peaks.js";
import { OverviewContainer, ZoomviewContainer } from "./styled";
import { UrlDataProps } from "@/app/data/UrlData";
import { SegmentProps } from "@/app/types";
import {
  setPeaksConfig,
  overviewOptionsConfig,
  zoomviewOptionsConfig,
} from "@/app/lib/waveform-config";
import {
  PlayPauseAudio,
  markInPoint,
  markOutPoint,
  addSegment,
  getAllSegments,
} from "@/app/lib/waveform-utils";
import DisplaySegments from "../segments";
import { Icon } from "@chakra-ui/react";
import { TbBracketsContainStart, TbBracketsContainEnd } from "react-icons/tb";
import { HiPlayPause } from "react-icons/hi2";

const WaveformView = ({
  audioUrl,
  audioContentType,
  waveformDataUrl,
}: UrlDataProps) => {
  //create ref's to peaks.js containers
  const zoomviewWaveformRef = React.createRef<HTMLDivElement>();
  const overviewWaveformRef = React.createRef<HTMLDivElement>();
  const audioElementRef = React.createRef<HTMLAudioElement>();

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [segments, setSegments] = useState<Segment[]>([]);
  const [inPoint, setInPoint] = useState<number>(0);
  const [outPoint, setOutPoint] = useState<number>(0);

  // state for peaks instance
  const [myPeaks, setMyPeaks] = useState<PeaksInstance | undefined>();

  console.log("Waveform component", { inPoint, outPoint });

  // create function to create instance of peaks
  // useCallback means this will only render a single instance of peaks
  // audio changes are implemented on this instance of peaks using hte .setSource method
  const initPeaks = useCallback(() => {
    //setting options here by invoking setPeaksConfig()
    const options: PeaksOptions = setPeaksConfig(
      overviewWaveformRef,
      zoomviewWaveformRef,
      audioElementRef,
      overviewOptionsConfig,
      zoomviewOptionsConfig,
      waveformDataUrl
    );

    //assigning the source for the audio element
    audioElementRef.current!.src = audioUrl;

    //If there is an existing peaks instance, call destroy method and set undefined for myPeaks
    if (myPeaks) {
      myPeaks.destroy();
      setMyPeaks(undefined);
    }

    //create an instance of peaks
    Peaks.init(options, (err, peaks) => {
      if (err) {
        console.error("Failed to initialize Peaks instance: " + err.message);
        return;
      }

      //set instance of peaks to myPeaks state
      setMyPeaks(peaks);

      //set the amplitude scale for the zoomview container
      const view = peaks?.views.getView("zoomview");
      view?.setAmplitudeScale(0.8);

      //if there is no instance of peaks, return
      if (!peaks) {
        return;
      }
    });
  }, []);

  //call initi peaks on initial mount of WaveForm component
  useEffect(() => {
    if (initPeaks) {
      initPeaks();
    }
  }, []);

  //call .setSource methood to change audio source and waveform on peaks instance every time the audioUrl is changed
  //This avoids creating a new instnace of peaks everytime the audio changes
  useEffect(() => {
    const options = {
      mediaUrl: audioUrl,
      dataUri: {
        arraybuffer: waveformDataUrl,
      },
    };

    myPeaks?.setSource(options, (err) => {
      if (err) {
        console.error("Failed to initialize Peaks instance: " + err.message);
        return;
      }
    });
  }, [audioUrl]);

  return (
    <>
      <Flex
        justify={"center"}
        align={"center"}
        width={"100%"}
        direction={"column"}
        p={"1rem"}
      >
        <ZoomviewContainer ref={zoomviewWaveformRef}></ZoomviewContainer>

        <OverviewContainer ref={overviewWaveformRef}></OverviewContainer>

        <audio ref={audioElementRef} hidden>
          <source src={audioUrl} type={audioContentType} />
          Your browser does not support the audio element.
        </audio>
      </Flex>
      <Flex w={"100%"} align={"center"} p={"1rem"} direction={"column"}>
        <Flex>
          <Button
            variant={"brandOutlined"}
            px={"1rem"}
            onClick={() =>
              markInPoint(myPeaks, inPoint, setInPoint, outPoint, setOutPoint)
            }
          >
            <Icon as={TbBracketsContainStart} />
            In
          </Button>
          <Button
            variant={"brandOutlined"}
            mb={"1rem"}
            onClick={() => PlayPauseAudio(myPeaks, isPlaying, setIsPlaying)}
          >
            <Icon as={HiPlayPause} />
          </Button>
          <Button
            variant={"brandOutlined"}
            px={"1rem"}
            onClick={() =>
              markOutPoint(myPeaks, inPoint, setInPoint, outPoint, setOutPoint)
            }
          >
            Out
            <Icon as={TbBracketsContainEnd} />
          </Button>
        </Flex>
        <Flex>
          <Button
            variant={"brandOutlined"}
            onClick={() => addSegment(myPeaks, audioUrl, segments, setSegments)}
          >
            Add Segment
          </Button>
          <Button
            variant={"brandOutlined"}
            onClick={() => getAllSegments(myPeaks, segments, setSegments)}
          >
            Log Segments
          </Button>
        </Flex>
      </Flex>
      <Flex
        justify={"center"}
        align={"center"}
        width={"100%"}
        direction={"column"}
        p={"1rem"}
      >
        <DisplaySegments segments={segments} />
      </Flex>
    </>
  );
};

export default WaveformView;
