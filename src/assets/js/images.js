function importImages(r) {
  const images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}
const images = importImages(require.context('../img', false, /\.(png|jpe?g|svg)$/));
export default images;
