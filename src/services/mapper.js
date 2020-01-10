export const mapper = images => {
  return images.map(
    ({ id, webformatURL: webformat, largeImageURL: largeImage, tags }) => ({
      id,
      webformat,
      largeImage,
      tags,
    }),
  );
};
