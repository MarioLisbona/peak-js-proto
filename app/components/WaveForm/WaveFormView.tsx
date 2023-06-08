"use client";

import { Flex, Text } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState, useMemo } from "react";
import Peaks, { PeaksInstance, PeaksOptions } from "peaks.js";
import { OverviewContainer, ZoomviewContainer } from "./styled";
import { UrlDataProps } from "@/app/data/UrlData";

const WaveformView = ({
  audioUrl,
  audioContentType,
  waveformDataUrl,
}: UrlDataProps) => {
  const zoomviewWaveformRef = React.createRef<HTMLDivElement>();
  const overviewWaveformRef = React.createRef<HTMLDivElement>();
  const audioElementRef = React.createRef<HTMLAudioElement>();

  const [myPeaks, setMyPeaks] = useState<PeaksInstance | undefined>();

  const initPeaks = useCallback(() => {
    const options: PeaksOptions = {
      overview: {
        container: overviewWaveformRef.current,
      },
      zoomview: {
        container: zoomviewWaveformRef.current,
        // Color for the zoomable waveform
        // You can also use a 2 stop gradient here. See setWaveformColor()
        waveformColor: "#191C43",

        // Color for the played region of the zoomable waveform
        // You can also use a 2 stop gradient here. See setWaveformColor()
        playedWaveformColor: "#D92027",

        // Color of the playhead
        playheadColor: "#000000",

        // Color of the playhead text
        playheadTextColor: "#000000",

        // Show current time next to the playhead
        showPlayheadTime: true,

        // Precision of time label of playhead and point/segment markers
        timeLabelPrecision: 2,

        // Mouse-wheel mode: either 'none' or 'scroll'
        wheelMode: "scroll",
      },
      mediaElement: audioElementRef.current!,
      keyboard: true,
      dataUri: {
        arraybuffer: waveformDataUrl,
      },

      createSegmentMarker: undefined,
      createSegmentLabel: undefined,
      createPointMarker: undefined,
    };

    audioElementRef.current!.src = audioUrl;

    if (myPeaks) {
      myPeaks.destroy();
      setMyPeaks(undefined);
    }

    Peaks.init(options, (err, peaks) => {
      if (err) {
        console.error("Failed to initialize Peaks instance: " + err.message);
        return;
      }

      setMyPeaks(peaks);

      if (!peaks) {
        return;
      }
    });

    console.log("inside useCallback", { myPeaks });
  }, [audioUrl]);

  useEffect(() => {
    initPeaks();
  }, [initPeaks]);

  console.log("outside useCallback", { myPeaks });

  return (
    <>
      <Flex
        justify={"center"}
        align={"center"}
        width={"100%"}
        direction={"column"}
      >
        <ZoomviewContainer ref={zoomviewWaveformRef}></ZoomviewContainer>

        <OverviewContainer ref={overviewWaveformRef}></OverviewContainer>

        <audio ref={audioElementRef} controls>
          <source src={audioUrl} type={audioContentType} />
          Your browser does not support the audio element.
        </audio>
      </Flex>
    </>
  );
};

export default WaveformView;
