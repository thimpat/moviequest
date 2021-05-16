import { render, screen } from "@testing-library/react";
import App from "../app/App";
import React from "react";

describe("The home page", () => {
  it("should render something", () => {
    render(<App />);
    const linkElement = screen.getByText(/Movie Quest/i);
    expect(linkElement).toBeInTheDocument();
  });
});
