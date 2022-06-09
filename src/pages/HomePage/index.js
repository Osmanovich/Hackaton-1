// helpers
import { useQueryUrl } from "../../lib/data";

// wrappers
import MainWrapper from "./wrappers/Main";
import VideoContentWrapper from "./wrappers/VideoContent";
import VideoPlayerWrapper from "./wrappers/VideoPlayer";
import RecommendationsWrapper from "./wrappers/Recommendations";
import CommentsWrapper from "./wrappers/Comments";
import Toast from "../../components/Toast";

// components
import Heading from "../../components/Heading";
import Menu from "../../components/Menu";
import VideoPlayer from "../../components/VideoPlayer";
import VideoInfo from "../../components/VideoInfo";
import LoadingComment from "../../components/LoadingComment";

// data

// ui mappers
import { commentToComponent, recToComponent } from "./ui";

const recUrl = "https://api.upstart.io/videos/recommended";
const commentsUrl = "https://api.upstart.io/video/1/comments";
const videoInfoUrl = "https://api.upstart.io/video/1";

const HomePage = () => {
  const {
    data: recommendations,
    isLoading: isRecLoading,
    isError: isRecError,
  } = useQueryUrl({
    url: recUrl,
    init: [],
  });

  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useQueryUrl({
    url: commentsUrl,
    init: [],
  });

  const {
    data: videoInfo,
    isLoading: isVideoInfoLoading,
    isError: isVideoInfoError,
  } = useQueryUrl({
    url: videoInfoUrl,
    init: { title: "" },
  });

  const anythingLoading =
    isRecLoading || isCommentsLoading || isVideoInfoLoading;
  const anyError = isRecError || isCommentsError || isVideoInfoError;

  return (
    <>
      {anythingLoading && (
        <Toast error={false} msg={"Data is being loaded"} timeout={3500} />
      )}

      {anyError && (
        <Toast error={true} msg={"An error has occured"} timeout={3500} />
      )}

      <MainWrapper>
        <Heading />

        <Menu />
{/* 
        <VideoContentWrapper>
          <VideoPlayerWrapper>
            <VideoPlayer
              title={videoInfo.title}
              isLoading={isVideoInfoLoading}
            />
            <VideoInfo />
          </VideoPlayerWrapper>

          <CommentsWrapper>
            {isCommentsLoading && <LoadingComment />}

            {!isCommentsLoading && comments.map(commentToComponent)}
          </CommentsWrapper>
        </VideoContentWrapper> */}
<div className="md:flex md:flex-col md:flex-1">
  <img className="m-5 w-72" src="https://q-xx.bstatic.com/xdata/images/hotel/max500/345088188.jpg?k=066884ede88e97e8fcc9a28f98fe25d4475b4f7a55d76753a6a36fa1b3935585&o="/>
  




</div>
        <RecommendationsWrapper>
          {recommendations.map(recToComponent)}
        </RecommendationsWrapper>
      </MainWrapper>
    </>
  );
};

export default HomePage;
