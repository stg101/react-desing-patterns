import React from "react";

function Visibility({ title = "", visibility }) {
  return (
    <li>
      {title} <i>{visibility.toString()}</i>
    </li>
  );
}
export default Visibility;
