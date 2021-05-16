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
    expect(linkElement).toHaveFocus();
  });

  it("should initiate a search when the search button is pressed", () => {
    render(<SearchBar />);
    // Add a text to the input
    const inputBox = screen.getByPlaceholderText("Search");
    fireEvent.change(inputBox, { target: { value: "My Text" } });
    fireEvent.blur(inputBox);

    // Press the search button
    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);

    const linkElement = screen.getByText("Searching... My Text");
    expect(linkElement).toBeInTheDocument();
  });

  it("should initiate a search when the Enter key is pressed", () => {
    render(<SearchBar />);
    // Add a text to the input
    const inputBox = screen.getByPlaceholderText("Search");
    fireEvent.change(inputBox, { target: { value: "My second phrase" } });
    fireEvent.keyDown(inputBox, { key: "Enter", keyCode: 13 });

    const linkElement = screen.getByText("Searching... My second phrase");
    expect(linkElement).toBeInTheDocument();
  });
});
