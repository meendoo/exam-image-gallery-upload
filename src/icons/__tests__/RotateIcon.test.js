import React from "react";
import RotateIcon from "../RotateIcon";
import renderer from "react-test-renderer";

describe("RotateIcon", () => {
  it("should render as it is", () => {
    const rotateIcon = renderer.create(<RotateIcon />);
    expect(rotateIcon).toMatchSnapshot();
  });
  it("should render properly if props are given", () => {
    const rotateIconWithProps = renderer.create(
      <RotateIcon
        width={200}
        height={200}
        fill="white"
        className="sample"
        right
        onClick={() => {}}
      />
    );
    expect(rotateIconWithProps).toMatchSnapshot();
  });
});
