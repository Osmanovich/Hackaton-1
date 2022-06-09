import { register } from "@frukmruk/html";

const MainWrapper = (props) => {
  return (
    <div
      id="main"
      class="flex flex-col md:flex-row md:flex-wrap justify-start p-4 w-screen min-h-screen">
      {props.children}
    </div>
  );
};

register({ MainWrapper });

export default MainWrapper;
