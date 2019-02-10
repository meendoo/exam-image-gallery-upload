import React from "react";
import { gallery } from "../gallery.reducer";
import { GALLERY } from "../../constants";
import { toggleSortOrderByTimestamp } from "../../utils";

const imageFetchMock = [
  {
    id: 0,
    name: "A.jpeg",
    timestamp: {
      seconds: 1548900000
    },
    url: "https://picsum.photos/200/300"
  },
  {
    id: 1,
    name: "B.jpeg",
    timestamp: {
      seconds: 1548800000
    },
    url: "https://picsum.photos/300/400"
  },
  {
    id: 2,
    name: "C.jpeg",
    timestamp: {
      seconds: 1548700000
    },
    url: "https://picsum.photos/400/500"
  }
];

describe("Gallery Reducer", () => {
  it("should return initial state", () => {
    expect(gallery(undefined, {})).toEqual({
      order: "Newest"
    });
  });

  it("should pass through stages of request, success and clear data", () => {
    expect(gallery({}, { type: GALLERY.FETCH_REQUEST })).toEqual({
      isFetching: true
    });

    expect(
      gallery(
        { isFetching: true },
        { type: GALLERY.FETCH_SUCCESS, images: imageFetchMock }
      )
    ).toEqual({ isFetching: false, images: imageFetchMock });

    expect(
      gallery(
        {
          isFetching: false,
          images: imageFetchMock
        },
        { type: GALLERY.CLEAR_GALLERY }
      )
    ).toEqual({ isFetching: false, images: [] });
  });

  it("should reorder images Newest->Oldest->Newest", () => {
    expect(
      gallery(
        {
          images: toggleSortOrderByTimestamp(imageFetchMock, "Newest"),
          order: "Newest"
        },
        { type: GALLERY.ORDERBY_OLDEST }
      )
    ).toEqual({
      images: toggleSortOrderByTimestamp(imageFetchMock, "Oldest"),
      order: "Oldest"
    });

    expect(
      gallery(
        {
          images: toggleSortOrderByTimestamp(imageFetchMock, "Oldest"),
          order: "Oldest"
        },
        { type: GALLERY.ORDERBY_NEWEST }
      )
    ).toEqual({
      images: toggleSortOrderByTimestamp(imageFetchMock, "Newest"),
      order: "Newest"
    });
  });
});
