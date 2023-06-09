export type SelectAudioProps = (evt: string) => void;

export type SegmentProps = {
  id: string;
  startTime: number;
  endTime: number;
  color: string;
  customAttribute: string;
};
