function constructItemThumbnail(item) {
  return `${item.baseUrl}/${item.thumbnail.filename}`;
}
function constructItemImagesArray(item) {
  const images = [];
  const base = item.baseUrl;
  const max = 10;
  for (let i = 0; i < max; i += 1) {
    const image = item[`image${i}`];
    if (image) {
      images.push(`${base}/${image.filename}`);
    }
  }
  return images;
}

export default {
  constructItemImagesArray,
  constructItemThumbnail,
};
