import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

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

  it("should initiate a search when the search button is pressed", () => {
    render(<SearchBar />);
    // Add a text to the input
    const inputBox = screen.getByPlaceholderText("Search");
    fireEvent.change(inputBox, { target: { value: "Good Day" } });
    fireEvent.blur(inputBox);

    // Press the search button
    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);

    const linkElement = screen.getByText("Searching... Good Day");
    expect(linkElement).toBeInTheDocument();
  });
});
