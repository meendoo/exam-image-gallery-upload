import * as GalleryActions from "../gallery.actions";
import * as ImageActions from "../image.actions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { GALLERY } from "../../constants";
import { showLoading, hideLoading } from "react-redux-loading-bar";

jest.mock("../../services/requests.js");

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

describe("Gallery actions tests", () => {
  let store;
  const mockStore = configureMockStore([thunk]);

  beforeAll(() => {
    store = mockStore(initialState);
  });

  it("Should run fetchImages() properly", () => {
    const mockImagesResult = store.getState().gallery.images;
    store.dispatch(showLoading());
    store.dispatch(GalleryActions.fetchRequest());
    store.dispatch(GalleryActions.fetchSuccess(mockImagesResult));
    store.dispatch(hideLoading());
    const expectedActions = [
      { type: "loading-bar/SHOW" },
      { type: GALLERY.FETCH_REQUEST },
      { type: GALLERY.FETCH_SUCCESS, images: mockImagesResult },
      { type: "loading-bar/HIDE" }
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });

  // it("Should trigger openImageViewerModal action", () => {
  //   const imageRef = store.getState().gallery.images;
  //   const expectedAction = [
  //     { type: MODAL.OPEN_IMAGE_VIEWER },
  //     {
  //       type: IMAGE.VIEW_IMAGE,
  //       payload: {
  //         imageRef,
  //         currentViewIndex: 0
  //       }
  //     }
  //   ];
  //   store.dispatch({ type: MODAL.OPEN_IMAGE_VIEWER });
  //   store.dispatch(ImageActions.viewImage(imageRef, 0));
  //   expect(store.getActions()).toEqual(expectedAction);
  // });

  it("Should trigger fetchRequest action", () => {
    const expectedAction = { type: GALLERY.FETCH_REQUEST };
    expect(GalleryActions.fetchRequest()).toEqual(expectedAction);
  });

  it("Should trigger fetchSuccess action", () => {
    const mockImagesResult = store.getState().gallery.images;
    const expectedAction = { type: GALLERY.FETCH_SUCCESS, images: mockImagesResult };
    expect(GalleryActions.fetchSuccess(mockImagesResult)).toEqual(expectedAction);
  });

  // it('Should trigger handleOrder action', () => {
  //   const expectedActionWhenNewest = store.dispatch(GalleryActions.orderByOldest());
  //   const expectedActionWhenOldest = store.dispatch(GalleryActions.orderByNewest());
  //   const mockDispatches = jest.fn()
  //                         .mockReturnValueOnce(expectedActionWhenNewest)
  //                         .mockReturnValueOnce(expectedActionWhenOldest)
  //   expect(GalleryActions.handleOrder('Newest')).toHaveReturnedWith(mockDispatches);
  //   expect(GalleryActions.handleOrder('Oldest')).toHaveReturnedWith(mockDispatches);
  // })

  it("Should trigger orderByOldest action", () => {
    const expectedAction = { type: GALLERY.ORDERBY_NEWEST };
    expect(GalleryActions.orderByNewest()).toEqual(expectedAction);
  });

  it("Should trigger orderByNewest action", () => {
    const expectedAction = { type: GALLERY.ORDERBY_OLDEST };
    expect(GalleryActions.orderByOldest()).toEqual(expectedAction);
  });

  // it("should render <ToastCloseButton/>", () => {
  //   const expectedAction = { type: GALLERY.ORDERBY_NEWEST };
  //   expect(GalleryActions.orderByNewest()).toEqual(expectedAction);
  // });
});
