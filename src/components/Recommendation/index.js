import { register } from "@frukmruk/html";

const Recommendation = (prop) => {
  return (
    <div id="rec" class="p-2 mb-6 w-24 h-24 bg-purple-600">
      {prop.title}
    </div>
  );
};

register({ Recommendation });

export default Recommendation;
