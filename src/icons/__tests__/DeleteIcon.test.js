import React from "react";
import DeleteIcon from "../DeleteIcon";
import renderer from "react-test-renderer";

describe("DeleteIcon", () => {
  it("should render as it is", () => {
    const deleteIcon = renderer.create(<DeleteIcon />);
    expect(deleteIcon).toMatchSnapshot();
  });
  it("should render properly if props are given", () => {
    const deleteIconWithProps = renderer.create(
      <DeleteIcon width={200} height={200} fill="white" className="sample" onClick={() => {}} />
    );
    expect(deleteIconWithProps).toMatchSnapshot();
  });
});
