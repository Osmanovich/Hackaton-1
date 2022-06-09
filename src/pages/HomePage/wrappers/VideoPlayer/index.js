import { register } from "@frukmruk/html";

const VideoPlayerWrapper = (props) => {
  return (
    <div
      id="player-container"
      class="flex flex-col justify-around items-center min-h-fit px-8 py-2 mb-6">
      {props.children}
    </div>
  );
};

register({ VideoPlayerWrapper });

export default VideoPlayerWrapper;
