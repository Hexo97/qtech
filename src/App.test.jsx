import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import SlideShow from "./Components/SlideShow";
import NavBar from "./Components/NavBar";
import { MemoryRouter } from "react-router-dom";

test("Renders the product details link", () => {
  render(<MemoryRouter>
    <App />
  </MemoryRouter>)
  const linkElement = screen.getByText("Top Rated Courses");
  expect(linkElement).toBeInTheDocument();
});

describe('Redner Components:', () => {

  test("NavBar", () => {
    // render(<NavBar />);
    render(<MemoryRouter>
      <NavBar />
    </MemoryRouter>)
  });

  test("SlideShow", () => {
    render(<SlideShow />);
  });

})