import { register } from "@frukmruk/html";

const LoadingComment = () => {
  return (
    <div class="p-1 text-gray-600 my-2 text-sm bg-gray-200 animate-pulse">
      Loading...
    </div>
  );
};

register({ LoadingComment });

export default LoadingComment;
