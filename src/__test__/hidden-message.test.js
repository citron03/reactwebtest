import * as React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import RtlBasicExample from "components/RtlBasicExample";

test("shows the children when the checkbox is checked", () => {
  const testMessage = "Test Message";
  render(<RtlBasicExample>{testMessage}</RtlBasicExample>);

  expect(screen.queryByText(testMessage)).toBeNull();

  fireEvent.click(screen.getByLabelText(/show/i));

  expect(screen.getByText(testMessage)).toBeInTheDocument();
});
