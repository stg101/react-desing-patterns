import React from "react";
import { render } from "@testing-library/react";

import Visibility from "./visibility";

test("Visibility component", () => {
  const { asFragment } = render(
    <Visibility title="Use hook component:" visibility />
  );

  expect(asFragment()).toMatchSnapshot();
});
