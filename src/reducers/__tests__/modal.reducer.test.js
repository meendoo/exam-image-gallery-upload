import React from "react";
import { modal } from "../modal.reducer";
import { MODAL } from "../../constants";

describe("Modal Reducer", () => {
  it("should return initial state", () => {
    expect(modal(undefined, {})).toEqual({
      isUploadZoneOpen: false,
      isImageViewerOpen: false,
      isUploading: false
    });
  });

  it("should update store when uploading image on MODAL.UPLOAD_REQUEST and on MODAL.UPLOAD_SUCCESS or MODAL.UPLOAD_REJECT", () => {
    expect(
      modal({ isUploading: false }, { type: MODAL.UPLOAD_REQUEST })
    ).toEqual({
      isUploading: true
    });

    expect(
      modal({ isUploading: true }, { type: MODAL.UPLOAD_SUCCESS })
    ).toEqual({
      isUploading: false
    });

    expect(modal({ isUploading: true }, { type: MODAL.UPLOAD_REJECT })).toEqual(
      {
        isUploading: false
      }
    );
  });

  it("should update store when opening and closing ImageViewer and UploadZone", () => {
    expect(
      modal({ isUploadZoneOpen: false }, { type: MODAL.OPEN_UPLOAD_ZONE })
    ).toEqual({
      isUploadZoneOpen: true
    });

    expect(
      modal({ isImageViewerOpen: false }, { type: MODAL.OPEN_IMAGE_VIEWER })
    ).toEqual({
      isImageViewerOpen: true
    });

    expect(
      modal(
        {
          isUploadZoneOpen: true,
          isImageViewerOpen: true
        },
        { type: MODAL.CLOSE_MODAL }
      )
    ).toEqual({
      isImageViewerOpen: false,
      isUploadZoneOpen: false
    });
  });
});
