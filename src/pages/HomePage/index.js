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
        </VideoContentWrapper>

        <RecommendationsWrapper>
          {recommendations.map(recToComponent)}
        </RecommendationsWrapper>
      </MainWrapper>
    </>
  );
};

export default HomePage;
