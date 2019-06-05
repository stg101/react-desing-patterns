import React from "react";

function useConnection() {
  const [connection, setConnection] = React.useState("online");

  React.useEffect(() => {
    function handleOnline() {
      setConnection(navigator.onLine ? "online" : "offline");
      console.log(navigator.onLine ? "online" : "offline");
    }

    document.addEventListener("online", handleOnline);
    document.addEventListener("offline", handleOnline);

    return () => {
      document.removeEventListener("offline", handleOnline);
      document.removeEventListener("online", handleOnline);
    };
  }, [setConnection]);

  return connection;
}

export default useConnection;
