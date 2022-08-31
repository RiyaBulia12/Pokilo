import '../css/main.css';

import { getLikes, getPoke } from './api.js';
import { viewPoke } from './comments.js';
import { importImages } from './functions.js';
import updateLikes from './likes.js';

const images = importImages(require.context('../img', false, /\.(png|jpe?g|svg)$/));
const grid = document.querySelector('.poke-grid');
const createGrid = (item, id, likes) => {
  // =======
  // import {  getLikes, getPoke } from './api.js';
  // import { updateLikes } from './likes';
  // // import { loadLikes } from './likes.js';
  // function importImages(r) {
  //   const images = {};
  //   r.keys().forEach((item) => {
  //     images[item.replace('./', '')] = r(item);
  //   });
  //   return images;
  // }

  // const images = importImages(require.context('../img', false, /\.(png|jpe?g|svg)$/));
  // const grid = document.querySelector('.poke-grid');

  // const createGrid = (item, id, likes) => {
  // >>>>>>> Stashed changes
  grid.innerHTML += `
    <div class="col-3 ">
      <div class="image">
        <img src="${images[`${id}.png`]}" alt="pokemon image 1" />
      </div>
      <div class="desc">
        <h3>${item.name}</h3>
        <i class="bi bi-heart" id="${item?.name}"></i>
        <span class="like-counts" id="like-${item?.name}">${likes}</span>
      </div>
      <div class="btn-container">
        <button type="button" class="btn btn-warning comment-btn" id="${id}" data-bs-toggle="modal" data-bs-target="#projectModal">Comment</button>
      </div>
    </div>
  `;
};

const loadPoke = async () => {
  const getPokemon = await getPoke();
  const getLikeList = await getLikes();
  getPokemon.forEach((item, id) => {
    const like = getLikeList[id]?.likes;
    const pokeId = +item.url.split('/').filter(Boolean).pop();
    createGrid(item, pokeId, like);

    const likeIcon = document.querySelectorAll('.bi-heart');
    likeIcon.forEach((item) => {
      item.addEventListener('click', (e) => {
        updateLikes(e);
      });
    });

    const commentBtns = document.querySelectorAll('.comment-btn');
    commentBtns.forEach((comment) => {
      comment.onclick = (event) => {
        viewPoke(+event.target.id);
      };
    });
  });
};

loadPoke();
