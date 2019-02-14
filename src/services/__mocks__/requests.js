const mockResult = [
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
];

export const getImages = () => {
  return new Promise.resolve(mockResult);
};

// export const postImage = (data, config) => {
//   return api
//         .post('/image', data, config)
//         .then(image => image)
//         .catch(err => { throw new Error(err) })
// }

// export const removeImage = (imageId) => {
//   return api.delete(`image/:${imageId}`)
//         .then(image => image)
//         .catch(err => { throw new Error(err) })
// }
