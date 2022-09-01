import { postLikes } from './api.js';

const updateLikes = (e) => {
  e.target.classList.remove('bi-heart');
  e.target.classList.add('bi-heart-fill');

  postLikes({ item_id: e.target.id });
  const count = document.querySelectorAll('.like-counts');
  count.forEach((item) => {
    const id = item.id.split('-')[1];
    if (id === e.target.id) {
      let count = +item.innerHTML;
      count += 1;
      item.innerHTML = count.toString();
    }
  });
};

export default updateLikes;
