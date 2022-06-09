// components
import Comment from "../../../components/Comment";
import Recommendation from "../../../components/Recommendation";

export const recToComponent = (rec) => {
  return <Recommendation title={rec.title} />;
};

export const commentToComponent = (comment) => {
  return <Comment text={comment.text} />;
};
