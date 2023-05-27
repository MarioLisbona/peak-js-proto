"use client";

import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const WaveformView = ({ audioUrl, audioContentType, waveformDataUrl }) => {
  return (
    <>
      <Flex
        justify={"center"}
        align={"center"}
        width={"100%"}
        direction={"column"}
      >
        <Text>AudioUrl: {audioUrl}</Text>
        <Text>audioContentType: {audioContentType}</Text>
        <Text>waveformDataUrl: {waveformDataUrl}</Text>
      </Flex>
    </>
  );
};

export default WaveformView;
