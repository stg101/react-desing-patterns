import React from "react";

function withVisibility(Component) {
  function Visibility() {
    const [visibility, setVisibility] = React.useState(true);

    React.useEffect(() => {
      function handler(event) {
        setVisibility(!document.hidden);
      }
      document.addEventListener("visibilitychange", handler);
      return () => document.removeEventListener("visibilitychange", handler);
    });
    return <Component visibility={visibility} title="Visible Hoc page:" />;
  }

  return Visibility;
}

export default withVisibility;
