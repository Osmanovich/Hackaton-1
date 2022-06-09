import ReactDOM from "react-dom";

import { wrap } from "@frukmruk/mockapi";

import "./__styles-generated/tailwind-pre-build.css";
import "@frukmruk/html/dist/styles/tailwind.utils.css";

import App from "./App";

wrap(() => {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
});
