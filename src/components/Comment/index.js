import { register } from "@frukmruk/html";

const Comment = ({ text }) => {
  return <div class="p-1 text-gray-600 my-2 text-sm">{text}</div>;
};

register({ Comment });

export default Comment;
