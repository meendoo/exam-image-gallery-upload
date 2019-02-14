import * as ImageActions from "../image.actions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { IMAGE } from "../../constants";

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
  }
};

describe("Modal actions tests", () => {
  let store;
  const mockStore = configureMockStore([thunk]);

  beforeAll(() => {
    store = mockStore(initialState);
  });

  it("Should trigger viewImage action", () => {
    const imageRef = store.getState().gallery.images;
    const expectedAction = {
      type: IMAGE.VIEW_IMAGE,
      payload: {
        imageRef,
        currentViewIndex: 0
      }
    };
    expect(ImageActions.viewImage(imageRef, 0)).toEqual(expectedAction);
  });

  it("Should trigger deleteImage action", () => {
    // const image = store.getState().gallery.images[2];
    const expectedAction = [{ type: IMAGE.DELETE }];

    store.dispatch({ type: IMAGE.DELETE });
    expect(store.getActions()).toEqual(expectedAction);
    // expect(ImageActions.deleteImage(image)).toReturnWith(expectedAction);
  });
});
