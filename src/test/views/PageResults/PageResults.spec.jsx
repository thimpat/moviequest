import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import App from "../../../app/App";

describe("The PageResults view", () => {
  it("should initiate a search when the Enter key is pressed", () => {
    render(<App />);
    // Add a text to the input
    const inputBox = screen.getByPlaceholderText("Search");
    fireEvent.change(inputBox, { target: { value: "Avengers" } });
    fireEvent.keyDown(inputBox, { key: "Enter", keyCode: 13 });

    const linkElement = screen.getByText("Searching... Avengers");
    expect(linkElement).toBeInTheDocument();
  });
});
