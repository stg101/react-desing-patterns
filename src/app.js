import React from "react";
// visibility
import Visibility from "./components/visibility";
import useVisibility from "./hooks/use-visibility";
import withVisibility from "./hocs/withVisibility";
import PropVisibility from "./render-props/visibility";
import VisibilityContainer from "./containers/visibility";

// connection
import Connection from "./components/connection";
import useConnection from "./hooks/use-connection";
import withConnection from "./hocs/withConnection";
import PropConnection from "./render-props/connection";
import ConnectionContainer from "./containers/connection";

const HocVisibility = withVisibility(Visibility);
const HocConnection = withConnection(Connection);

function App() {
  const visibility = useVisibility();
  const connection = useConnection();

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
      <hr />
      <ol>
        <Connection connection={connection} />
        <ConnectionContainer />
        <HocConnection />
        <PropConnection
          render={({ connection }) => <Connection connection={connection} />}
        />
      </ol>
    </>
  );
}

export default App;
