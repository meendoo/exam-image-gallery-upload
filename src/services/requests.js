import api from "./api";

export const getImages = () => {
  return api
    .get("/image")
    .then(images => images)
    .catch(err => {
      throw new Error(err);
    });
};

export const postImage = (data, config) => {
  return api
    .post("/image", data, config)
    .then(image => image)
    .catch(err => {
      throw new Error(err);
    });
};

export const removeImage = imageId => {
  return api
    .delete(`image/${imageId}`)
    .then(image => image)
    .catch(err => {
      throw new Error(err);
    });
};
