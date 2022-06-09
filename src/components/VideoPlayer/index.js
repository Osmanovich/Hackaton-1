import { register } from "@frukmruk/html";

const VideoPlayer = ({ title, isLoading = false }) => {
  return (
    <div id="player" class="h-64 w-11/12 p-2 mb-2 text-gray-800 text-xl">
      {isLoading && "Loader..."}

      {!isLoading && title}
    </div>
  );
};

register({ VideoPlayer });

export default VideoPlayer;
