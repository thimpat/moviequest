import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { mount } from "enzyme";

import SearchBar from "../../../app/components/SearchBar";

let container = null;

describe("The SearchBar component", () => {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("should contain a text box containing the 'Search' text", () => {
    const wrapper = mount(<SearchBar />);
    const searchButton = wrapper.find("input#search-textbox").at(0).props().placeholder;
    expect(searchButton).toEqual("Search");
  });
});
