import React from "react";
import Gallery from "../Gallery";
import Image from "../../components/Image";
import { GalleryActions } from "../../actions/index";
import GALLERY from "../../constants/gallery.constants";
import { shallow } from "enzyme";
import sinon from "sinon";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import renderer from "react-test-renderer";

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

  const createImages = store => {
    let storeImages = store.getState().gallery.images;
    return storeImages.map((img, imgIndex) => (
      <Image
        key={img.imageId}
        url={img.url}
        onClick={() => this.props.openImageViewerModal(images, imgIndex)}
      />
    ));
  };

  it("should show 3 images when provided", () => {
    const images = createImages(store);
    const galleryWithProps = shallow(<Gallery store={store}>{images}</Gallery>);
    expect(galleryWithProps.children().length).toEqual(3);
    expect(galleryWithProps).toMatchSnapshot();
  });

  it("it should render as it is", () => {
    const galleryInitial = renderer.create(<Gallery store={store} />).toJSON();
    expect(galleryInitial).toMatchSnapshot();
  });

  // it("should play animation if images and order props are changed", () => {
  //   const spy = sinon.spy(Gallery.prototype.componentDidUpdate);
  //   const wrapper = shallow(<Gallery store={store} />);

  //   store.dispatch({ type: GALLERY.FETCH_SUCCESS, images: [] });
  //   console.log(store.getActions());

  //   // expect(spy).toBeCalled();
  //   // expect(spy).to.have.property("callCount", 0);
  //   // wrapper.setProps({ foo: 'foo' });
  //   // expect(spy).to.have.property('callCount', 1);
  // });
});
