import { register } from "@frukmruk/html";

const RecommendationsWrapper = (props) => {
  return (
    <div
      id="recs"
      class="flex flex-row flex-wrap md:flex-col justify-around md:justify-start md:items-center p-5 md:w-56">
      {props.children}
    </div>
  );
};

register({ RecommendationsWrapper });

export default RecommendationsWrapper;
