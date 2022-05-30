import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Airbnb", () => {
  render(<App />);
  const linkElement = screen.getByText(/Airbnb/i);
  expect(linkElement).toBeInTheDocument();
});
