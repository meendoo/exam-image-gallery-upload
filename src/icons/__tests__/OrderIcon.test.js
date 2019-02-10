import React from "react";
import OrderIcon from "../OrderIcon";
import renderer from "react-test-renderer";

describe("OrderIcon", () => {
  it("should render as it is", () => {
    const spinner = renderer.create(<OrderIcon />);
    expect(spinner).toMatchSnapshot();
  });
});
