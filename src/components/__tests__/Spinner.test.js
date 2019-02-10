import React from "react";
import Spinner from "../Spinner";
import renderer from "react-test-renderer";

describe("Spinner", () => {
  it("should render as it is", () => {
    const spinner = renderer.create(<Spinner />);
    expect(spinner).toMatchSnapshot();
  });
});
