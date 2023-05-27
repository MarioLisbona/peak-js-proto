"use client";

import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Peaks from "peaks.js";

const WaveformView = ({ audioUrl, audioContentType, waveformDataUrl }) => {
  const zoomviewWaveformRef = React.createRef();
  const overviewWaveformRef = React.createRef();
  const audioElementRef = React.createRef();
  let peaks = null;

  console.log(
    "WaveformView.render, audioUrl:",
    audioUrl,
    "waveformDataUrl:",
    waveformDataUrl
  );

  useEffect(() => {
    console.log("WaveformComponent mounted in useEffect");

    initPeaks();
  });

  useEffect(() => {
    console.log("WaveformComponent updated in useEffect");
    initPeaks();
  }, [audioUrl]);

  function initPeaks() {
    const options = {
      containers: {
        overview: overviewWaveformRef.current,
        zoomview: zoomviewWaveformRef.current,
      },
      mediaElement: audioElementRef.current,
      keyboard: true,
      logger: console.error.bind(console),
      // createSegmentMarker: createSegmentMarker,
      // createSegmentLabel: createSegmentLabel,
      // createPointMarker: createPointMarker
    };

    // if (this.props.waveformDataUrl) {
    //   options.dataUri = {
    //     arraybuffer: this.props.waveformDataUrl
    //   };
    // }
    // else if (this.props.audioContext) {
    //   options.webAudio = {
    //     audioContext: this.props.audioContext
    //   };
    // }

    audioElementRef.current.src = audioUrl;

    // if (this.peaks) {
    //   this.peaks.destroy();
    //   this.peaks = null;
    // }

    Peaks.init(options, (err, peaks) => {
      peaks = peaks;
      // this.onPeaksReady();
    });
  }

  return (
    <>
      <Flex
        justify={"center"}
        align={"center"}
        width={"100%"}
        direction={"column"}
      >
        <div className="zoomview-container" ref={zoomviewWaveformRef}></div>
        <div className="overview-container" ref={overviewWaveformRef}></div>

        <audio ref={audioElementRef} controls="controls">
          <source src={audioUrl} type={audioContentType} />
          Your browser does not support the audio element.
        </audio>
      </Flex>
    </>
  );
};

export default WaveformView;
