import React, { useState } from "react";
import WaveformView from "./WaveFormView";
import OuterContainer from "./OuterContainer";
import { UrlDataProps } from "../../data/UrlData";

import { urls } from "../../data/UrlData";

const WaveForm = () => {
  type selectAudioProps = (evt: string) => void;

  const [url, setUrl] = useState({
    audioUrl: "07030039.mp3",
    audioContentType: "audio/mpeg",
    waveformDataUrl: "07030039.dat",
  });

  const selectAudio: selectAudioProps = (evt: string) => {
    const e = Number(evt);

    setUrl({
      audioUrl: urls[e].audioUrl,
      audioContentType: urls[e].audioContentType,
      waveformDataUrl: urls[e].waveformDataUrl,
    });
  };

  return (
    <OuterContainer selectAudio={selectAudio}>
      <WaveformView
        audioUrl={url.audioUrl}
        audioContentType={url.audioContentType}
        waveformDataUrl={url.waveformDataUrl}
      />
    </OuterContainer>
  );
};

export default WaveForm;
