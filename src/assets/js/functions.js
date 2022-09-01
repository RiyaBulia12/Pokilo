export function importImages(r) {
  const images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}
// <<<<<<< HEAD
export default { importImages };
// =======
// export default { importImages };
// >>>>>>> 3fc844d071526692b4d574b58b074ae97493bc17
