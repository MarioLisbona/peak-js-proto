import React, { useState } from "react";
import SectionContainer from "../SectionContainer";

import { Button, Flex, Text } from "@chakra-ui/react";
const WaveForm = () => {
  const urls = {
    1: {
      audioUrl: "07030039.mp3",
      audioContentType: "audio/mpeg",
      waveformDataUrl: "07030039.dat",
    },

    2: {
      audioUrl: "07023003.mp3",
      audioContentType: "audio/mpeg",
      waveformDataUrl: "07023003-2channel.dat",
    },
    3: {
      audioUrl: "Instrumental.mp3",
      audioContentType: "audio/mpeg",
      waveformDataUrl: "Instrumental.dat",
    },
  };

  const [url, setUrl] = useState({});

  console.log(url);

  function handleSelectedAudioChange(evt) {
    const e = Number(evt);

    setUrl({
      audioUrl: urls[e].audioUrl,
      audioContentType: urls[e].audioContentType,
      waveformDataUrl: urls[e].waveformDataUrl,
    });
  }

  return (
    <SectionContainer>
      <Flex
        bg={"bgPink"}
        align={"center"}
        direction={"column"}
        p={"2rem"}
        borderRadius={"24px"}
      >
        <Text textStyle={"subheading"} mb={"2rem"}>
          Peak.js Waveform Prototype
        </Text>
        <Flex justify={"flex-start"} align={"center"} w={"100%"} mb={"2rem"}>
          <Text textStyle={"context"}>Choose and audio file</Text>
          <Button
            onClick={(evt) => handleSelectedAudioChange(evt.target.value)}
            variant={"brandOutlined"}
            value={1}
          >
            Bird Song
          </Button>
          <Button
            onClick={(evt) => handleSelectedAudioChange(evt.target.value)}
            variant={"brandOutlined"}
            value={2}
          >
            Car Passing
          </Button>
          <Button
            onClick={(evt) => handleSelectedAudioChange(evt.target.value)}
            variant={"brandOutlined"}
            value={3}
          >
            Instrumental
          </Button>
        </Flex>
        <Flex
          h={"250px"}
          w={"100%"}
          border={"2px"}
          borderColor={"brandDarkGray"}
          borderRadius={"24px"}
          mb={"1rem"}
        ></Flex>
        <Flex
          h={"100px"}
          w={"100%"}
          border={"2px"}
          borderColor={"brandDarkGray"}
          borderRadius={"24px"}
        ></Flex>
      </Flex>
    </SectionContainer>
  );
};

export default WaveForm;
