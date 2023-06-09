export const overviewOptionsConfig = (
  overviewWaveformRef: React.RefObject<HTMLDivElement>
) => {
  return {
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

    // Show current time next to the play head
    showPlayheadTime: true,

    // Color of the playhead text
    playheadTextColor: "#000000",
  };
};

export const zoomviewOptionsConfig = (
  zoomviewWaveformRef: React.RefObject<HTMLDivElement>
) => {
  return {
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
  };
};
