import React from "react";

import Visibility from "../components/visibility";

function VisibilityContainer() {
  const [visibility, setVisibility] = React.useState(true);

  React.useEffect(() => {
    function handler(event) {
      setVisibility(!document.hidden);
    }
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  });

  return <Visibility visibility={visibility} title="Visible Container page:" />;
}

export default VisibilityContainer;
