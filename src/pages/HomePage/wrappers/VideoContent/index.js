import { register } from "@frukmruk/html";

const VideoContentWrapper = (props) => {
  return (
    <div id="videocontent" class="md:flex md:flex-col md:flex-1">
      {props.children}
    </div>
  );
};

register({ VideoContentWrapper });

export default VideoContentWrapper;
