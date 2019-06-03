import React from "react";

function useVisibility() {
  const [visibility, setVisibility] = React.useState(true);

  React.useEffect(() => {
    function handler() {
      if (document.hidden) {
        console.log(false);
        setVisibility(false);
      } else {
        console.log(true);
        setVisibility(true);
      }
    }
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, [setVisibility]);

  return visibility;
}

export default useVisibility;
