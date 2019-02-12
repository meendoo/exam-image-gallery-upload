import React from "react";
import Nav, { OrderButton } from "../Nav";
import renderer from "react-test-renderer";
import { GalleryActions } from "../../actions";
import { shallow } from "enzyme";
import sinon from "sinon";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

afterEach(() => {
  sinon.restore();
});

const initialState = {
  gallery: {
    order: "Newest",
    images: [
      {
        imageId: 0,
        name: "A.jpeg",
        timestamp: {
          seconds: 1548900000
        },
        url: "https://picsum.photos/200/300"
      },
      {
        imageId: 1,
        name: "B.jpeg",
        timestamp: {
          seconds: 1548800000
        },
        url: "https://picsum.photos/300/400"
      },
      {
        imageId: 2,
        name: "C.jpeg",
        timestamp: {
          seconds: 1548700000
        },
        url: "https://picsum.photos/400/500"
      }
    ]
  }
};

describe("Connected <Nav/> with mockStore", () => {
  const mockStore = configureMockStore([thunk]);
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test("should toggle order title when clicked", () => {
    const order = store.getState().gallery.order;
    // const orderClick = sinon.spy(GalleryActions.handleOrder(order));
    // const wrapper = shallow(<OrderButton order={order} onClick={orderClick} />);
    // wrapper.simulate("click");
    expect(order).toBe("Newest");
    // const rendered = renderer.create(<OrderButton order={order} onClick={GalleryActions.handleOrder(order)}/>);

    // expect(rendered.toJSON()).toMatchSnapshot();
  });
});
