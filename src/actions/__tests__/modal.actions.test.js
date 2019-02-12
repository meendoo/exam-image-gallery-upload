import * as ModalActions from "../modal.actions";
import * as ImageActions from "../image.actions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MODAL, IMAGE } from "../../constants";

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
    isUploading: false,
    isImageViewerOpen: false,
    isUploadZoneOpen: false
  }
};

describe("Modal actions tests", () => {
  let store;
  const mockStore = configureMockStore([thunk]);

  beforeAll(() => {
    store = mockStore(initialState);
  });

  it("Should trigger openUploadZoneModal action", () => {
    const expectedAction = { type: MODAL.OPEN_UPLOAD_ZONE };
    expect(ModalActions.openUploadZoneModal()).toEqual(expectedAction);
  });

  it("Should trigger openImageViewerModal action", () => {
    const imageRef = store.getState().gallery.images;
    const expectedAction = [
      { type: MODAL.OPEN_IMAGE_VIEWER },
      {
        type: IMAGE.VIEW_IMAGE,
        payload: {
          imageRef,
          currentViewIndex: 0
        }
      }
    ];
    store.dispatch({ type: MODAL.OPEN_IMAGE_VIEWER });
    store.dispatch(ImageActions.viewImage(imageRef, 0));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it("Should trigger closeModal action", () => {
    const expectedAction = { type: MODAL.CLOSE_MODAL };
    expect(ModalActions.closeModal()).toEqual(expectedAction);
  });

  // it('Should trigger sendFiles action', () => {
  //   const expectedAction = { type: MODAL.CLOSE_MODAL }
  //   expect(ModalActions.closeModal()).toEqual(expectedAction)
  //   expect(dispatch({ type: MODAL.UPLOAD_REQUEST }));
  // })
});
