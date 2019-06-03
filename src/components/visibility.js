import React from "react";

function Visibility({ title = "", visibility }) {
  return (
    <li>
      {title} <code>{visibility.toString()}</code>
    </li>
  );
}
export default Visibility;
