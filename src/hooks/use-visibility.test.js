import React from "react";
import { render } from "@testing-library/react";

import useVisibility from "./use-visibility";

test("Use visibility hook", () => {
  function Component() {
    const visibility = useVisibility();
    return <div>The visibility page is: {visibility.toString()}</div>;
  }
  const { asFragment } = render(<Component />);

  expect(asFragment()).toMatchSnapshot();
});
