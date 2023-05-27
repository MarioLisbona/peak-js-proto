"use client";

import React from "react";

const WaveformView = ({ audioUrl, audioContentType, waveformDataUrl }) => {
  return (
    <>
      <h1>WaveFormView</h1>
      <p>{audioUrl}</p>
      <p>{audioContentType}</p>
      <p>{waveformDataUrl}</p>
    </>
  );
};

export default WaveformView;
