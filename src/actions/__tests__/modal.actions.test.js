import * as ModalActions from "../modal.actions";
import MODAL from "../../constants/modal.constants";
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

  // it('Should trigger openImageViewerModal action', () => {
  //   const store = mockStore({})
  //   const imageRef = store.getState().gallery.images;
  //   expect(dispatch({ type: MODAL.OPEN_IMAGE_VIEWER })).toBeCalled();
  //   expect(ModalActions.openImageViewerModal(imageRef, 0)).toBeCalledWith(imageRef, 0);
  // })

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
