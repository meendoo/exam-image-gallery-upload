import React from "react";
import OrderIcon from "../OrderIcon";
import renderer from "react-test-renderer";

describe("OrderIcon", () => {
  it("should render as it is", () => {
    const orderIcon = renderer.create(<OrderIcon />);
    expect(orderIcon).toMatchSnapshot();
  });
  it("should render properly if props are given", () => {
    const orderIconWithProps = renderer.create(<OrderIcon width={200} height={200} fill="white" />);
    expect(orderIconWithProps).toMatchSnapshot();
  });
});
