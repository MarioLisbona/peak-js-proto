import React, { useState } from "react";
import WaveformView from "./WaveFormView";
import OuterContainer from "./OuterContainer";

import { urls } from "../../data/UrlData";
const WaveForm = () => {
  const [url, setUrl] = useState({
    audioUrl: "07030039.mp3",
    audioContentType: "audio/mpeg",
    waveformDataUrl: "07030039.dat",
  });

  function selectAudio(evt) {
    const e = Number(evt);

    setUrl({
      audioUrl: urls[e].audioUrl,
      audioContentType: urls[e].audioContentType,
      waveformDataUrl: urls[e].waveformDataUrl,
    });
  }

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
