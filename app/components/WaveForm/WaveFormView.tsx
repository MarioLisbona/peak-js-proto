'use client';

import { Flex, Text } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState, useMemo } from 'react';
import Peaks, { PeaksInstance, PeaksOptions } from 'peaks.js';
import { OverviewContainer, ZoomviewContainer } from './styled';

const WaveformView = ({ audioUrl, audioContentType, waveformDataUrl }) => {
  const zoomviewWaveformRef = React.createRef<HTMLDivElement>();
  const overviewWaveformRef = React.createRef<HTMLDivElement>();
  const audioElementRef = React.createRef<HTMLAudioElement>();

  const [myPeaks, setMyPeaks] = useState<PeaksInstance | undefined>();

  console.log(
    'WaveformView.render, audioUrl:',
    audioUrl,
    'waveformDataUrl:',
    waveformDataUrl
  );

  const initPeaks = useCallback(() => {
    console.log('inside initPeaks()', {
      zoomviewWaveformRef,
      overviewWaveformRef,
      audioElementRef,
    });

    const options: PeaksOptions = {
      containers: {
        overview: overviewWaveformRef.current,
        zoomview: zoomviewWaveformRef.current,
      },
      mediaElement: audioElementRef.current,
      keyboard: true,
      logger: console.error.bind(console),
      dataUri: {
        arraybuffer: waveformDataUrl,
      },
      createSegmentMarker: undefined,
      createSegmentLabel: undefined,
      createPointMarker: undefined,
    };

    audioElementRef.current.src = audioUrl;

    if (myPeaks) {
      myPeaks.destroy();
      setMyPeaks(undefined);
    }

    Peaks.init(options, (err, peaks) => {
      if (err) {
        console.error('Failed to initialize Peaks instance: ' + err.message);
        return;
      }

      setMyPeaks(peaks);

      if (!peaks) {
        return;
      }

      console.log('Peaks.js is ready', { peaks });
      console.log(peaks.player.getCurrentTime());
    });
  }, [audioUrl]);

  useEffect(() => {
    initPeaks();
  }, [initPeaks]);

  return (
    <>
      <Flex
        justify={'center'}
        align={'center'}
        width={'100%'}
        direction={'column'}
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
