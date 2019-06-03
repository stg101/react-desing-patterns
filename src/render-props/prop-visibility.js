import React from "react";

function PropVisibility({ children, render = children }) {
  const [visibility, setVisibility] = React.useState(true);

  React.useEffect(() => {
    function handler(event) {
      setVisibility(!document.hidden);
    }
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  });

  return render({ visibility });
}

export default PropVisibility;
