"use client";

import { Flex, Button } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState, useMemo } from "react";
import Peaks, { PeaksInstance, PeaksOptions } from "peaks.js";
import { OverviewContainer, ZoomviewContainer } from "./styled";
import { UrlDataProps } from "@/app/data/UrlData";
import { PlayPauseAudio } from "@/app/lib/waveform-utils";

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

  // state for peaks instance
  const [myPeaks, setMyPeaks] = useState<PeaksInstance | undefined>();

  // create function to create instance of peaks
  // useCallback means this will only render a single instance of peaks
  // audio changes are implemented on this instance of peaks using hte .setSource method
  const initPeaks = useCallback(() => {
    const options: PeaksOptions = {
      overview: {
        container: overviewWaveformRef.current,
        // Color for the overview waveform
        // You can also use a 2 stop gradient here. See setWaveformColor()
        waveformColor: "#41729F",
        // Color for the played region of the overview waveform
        // You can also use a 2 stop gradient here. See setWaveformColor()
        playedWaveformColor: "#C3E0E5",
        // Color for the overview waveform rectangle
        // that shows what the zoomable view shows
        highlightColor: "#B50000",
      },
      zoomview: {
        container: zoomviewWaveformRef.current,

        // Color for the zoomable waveform
        // You can also use a 2 stop gradient here. See setWaveformColor()
        waveformColor: "#41729F",

        // Color for the played region of the zoomable waveform
        // You can also use a 2 stop gradient here. See setWaveformColor()
        playedWaveformColor: "#C3E0E5",

        // Color of the playhead
        playheadColor: "#000000",

        // Color of the playhead text
        playheadTextColor: "#000000",

        // Show current time next to the playhead
        showPlayheadTime: true,

        // Precision of time label of playhead and point/segment markers
        timeLabelPrecision: 2,

        // Mouse-wheel mode: either 'none' or 'scroll'
        // wheelMode: "scroll",
      },

      //assigning the current audio element
      mediaElement: audioElementRef.current!,

      //assigning the precomputed waveform data
      dataUri: {
        arraybuffer: waveformDataUrl,
      },

      // Array of zoom levels in samples per pixel. Smaller numbers represent
      // being more "zoomed in".
      zoomLevels: [512, 1024, 2048, 4096],

      // To avoid computation when changing zoom level, Peaks.js maintains a cache
      // of waveforms at different zoom levels. This is enabled by default, but
      // can be disabled by setting waveformCache to false
      waveformCache: true,

      // Bind keyboard controls
      keyboard: true,

      // Keyboard nudge increment in seconds (left arrow/right arrow)
      nudgeIncrement: 0.01,
    };

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
      >
        <ZoomviewContainer ref={zoomviewWaveformRef}></ZoomviewContainer>

        <OverviewContainer ref={overviewWaveformRef}></OverviewContainer>

        <audio ref={audioElementRef} hidden>
          <source src={audioUrl} type={audioContentType} />
          Your browser does not support the audio element.
        </audio>
      </Flex>
      <Flex w={"100%"} justify={"space-between"} p={"1rem"}>
        <Flex>
          <Button
            variant={"brandOutlined"}
            onClick={() => PlayPauseAudio(myPeaks, isPlaying, setIsPlaying)}
          >
            Play / Pause
          </Button>
        </Flex>
        <Flex>
          <Button variant={"brandOutlined"}>Add Segment</Button>
          <Button variant={"brandOutlined"}>Log Segment</Button>
        </Flex>
      </Flex>
    </>
  );
};

export default WaveformView;
