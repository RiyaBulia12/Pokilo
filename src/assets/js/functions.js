export function importImages(r) {
  const images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

// export function importcomments = async () => {
//     await fetch(baseURL'/)
// }

// export const display = async () => {
//     await fetch(baseURL)
//       .then((response) => response.json())
//       .then((json) => {
//         populated.innerHTML = '';
//         json.result.forEach((element) => {
//           const list = document.createElement('li');
//           list.classList.add('users');
//           list.textContent = `${element.user} :   ${element.score}`;
//           populated.appendChild(list);
//         });
//     });
// }

export default { importImages };
