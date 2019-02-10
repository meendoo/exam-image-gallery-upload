import React from "react";
import RotateIcon from "../RotateIcon";
import renderer from "react-test-renderer";

describe("RotateIcon", () => {
  it("should render as it is", () => {
    const spinner = renderer.create(<RotateIcon />);
    expect(spinner).toMatchSnapshot();
  });
});
