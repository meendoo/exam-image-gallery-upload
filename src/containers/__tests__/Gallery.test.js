import React from "react";
import Gallery from "../Gallery";
import Image from "../../components/Image";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const initialState = {
  gallery: {
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
  },
  modal: {
    isUploading: false
  }
};

describe("Connected <Gallery/> with mockStore", () => {
  let store;
  const mockStore = configureMockStore([thunk]);

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it("renders images when data is provided", () => {
    const storeImages = store.getState().gallery.images;
    const images = storeImages.map((img, imgIndex) => {
      return (
        <Image
          key={img.imageId}
          url={img.url}
          onClick={() => this.props.openImageViewerModal(images, imgIndex)}
        />
      );
    });
    const wrapper = shallow(<Gallery store={store}>{images}</Gallery>);
    expect(wrapper.children().length).toEqual(3);
  });
});
