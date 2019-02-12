import React from "react";
import { Modal } from "../Modal";
import { shallow } from "enzyme";

describe("<Modal/> runs properly", () => {
  it("renders if isVisible props is true", () => {
    const hiddenModal = shallow(<Modal isVisible={false} />);
    expect(hiddenModal.children().length).toBe(0);
    const visibleModal = shallow(<Modal isVisible={true} />);
    expect(visibleModal.children().length).toBeGreaterThan(1);
  });
});
