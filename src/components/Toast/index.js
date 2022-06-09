import { useEffect, useState } from "react";

import { register } from "@frukmruk/html";

const Toast = (prop) => {
  const [isVisible, setIsVisible] = useState(true);

  const effect = () => {
    setTimeout(() => {
      setIsVisible(false);
    }, prop.timeout);
  };
  useEffect(effect, []);

  if (!isVisible) {
    return <></>;
  }

  if (prop.error) {
    return (
      <div
        class={`
          p-2 w-64 h-12 
          text-white 
          bg-red-500 fixed top-0 right-0`}>
        {prop.msg}
      </div>
    );
  } else {
    return (
      <div
        class={`p-2 w-64 h-12 
          text-white bg-green-500 
          fixed top-0 right-0`}>
        {prop.msg}
      </div>
    );
  }
};

register({ Toast });

export default Toast;
