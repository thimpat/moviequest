import React from "react";
import { render, screen } from "@testing-library/react";

import SearchBar from "../../../app/components/SearchBar";

describe("The SearchBar component", () => {
  it("should render a button containing the 'Search' text", () => {
    render(<SearchBar />);
    const linkElement = screen.getByText("Search");
    expect(linkElement).toBeInTheDocument();
  });

  it("should render a text box containing the 'Search' text", () => {
    render(<SearchBar />);
    const linkElement = screen.getByPlaceholderText("Search");
    expect(linkElement).toBeInTheDocument();
  });

  it("should have its text box focused", () => {
    render(<SearchBar />);
    const linkElement = screen.getByPlaceholderText("Search");
    expect(document.activeElement).toEqual(linkElement);
  });
});
