import { register } from "@frukmruk/html";

const CommentsWrapper = ({ children }) => {
  return (
    <div id="comments" class="min-h-20 overflow-visible mb-4 p-2">
      {children}
    </div>
  );
};

register({ CommentsWrapper });

export default CommentsWrapper;
