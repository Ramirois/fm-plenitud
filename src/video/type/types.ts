export type VideoTransformOptions = {
  width?: number;
  height?: number;
  roundCorners?: number;
};

export type VideoId = string;

export interface VideoPlayerProps {
  id: VideoId;
  options?: VideoTransformOptions;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

export type VideoComponent = React.ComponentType<VideoPlayerProps>;
