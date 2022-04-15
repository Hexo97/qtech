import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("Renders the product details link", () => {
  render(<App />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText("Click to view details");
  expect(linkElement).toBeInTheDocument();
});
