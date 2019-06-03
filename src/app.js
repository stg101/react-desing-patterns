import React from "react";

import Visibility from "./components/visibility";
import useVisibility from "./hooks/use-visibility";
import withVisibility from "./hocs/withVisibility";
import PropVisibility from "./render-props/prop-visibility";
import VisibilityContainer from "./containers/visibility";

const HocVisibility = withVisibility(Visibility);

function App() {
  const visibility = useVisibility();

  return (
    <>
      <ol>
        <Visibility title="Visible Hook page:" visibility={visibility} />
        <VisibilityContainer />
        <HocVisibility />
        <PropVisibility
          render={({ visibility }) => (
            <Visibility visibility={visibility} title="Visible Prop page:" />
          )}
        />
      </ol>
    </>
  );
}

export default App;
