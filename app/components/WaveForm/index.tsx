import React, { useState } from "react";
import WaveformView from "./WaveFormView";
import OuterContainer from "./OuterContainer";
import { urls } from "../../data/UrlData";
import { SelectAudioProps } from "@/app/types";
import { Button, Flex } from "@chakra-ui/react";
import Table from "../segments";

const WaveForm = () => {
  const [url, setUrl] = useState({
    audioUrl: "Instrumental.mp3",
    audioContentType: "audio/mpeg",
    waveformDataUrl: "Instrumental.dat",
  });

  const selectAudio: SelectAudioProps = (evt: string) => {
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
