import React from "react";
import PhotoIcon from "../PhotoIcon";
import renderer from "react-test-renderer";

describe("PhotoIcon", () => {
  it("should render as it is", () => {
    const photoIcon = renderer.create(<PhotoIcon />);
    expect(photoIcon).toMatchSnapshot();
  });
  it("should render properly if props are given", () => {
    const photoIconWithProps = renderer.create(
      <PhotoIcon width={200} height={200} className="sample" fill="white" />
    );
    expect(photoIconWithProps).toMatchSnapshot();
  });
});
