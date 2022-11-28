import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import HttpRequestWithKy from "components/HttpRequestWithKy";

test("check API call", async () => {
  render(<HttpRequestWithKy />);
  const button = screen.getByText(/POST REQUEST/i);

  fireEvent.click(button);
  const alert = await screen.findByRole("alert");
  expect(alert).toHaveTextContent(/name/i);
});
