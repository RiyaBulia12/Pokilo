import '../css/main.css';

import { getPoke } from './api.js';
import { viewPoke } from './comments.js';

function importImages(r) {
  const images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importImages(require.context('../img', false, /\.(png|jpe?g|svg)$/));
const grid = document.querySelector('.poke-grid');
const createGrid = (item, id) => {
  grid.innerHTML += `
    <div class="col-3 ">
      <div class="image">
        <img src="${images[`${id}.png`]}" alt="pokemon image 1" />
      </div>
      <div class="desc">
        <h3>${item.name}</h3>
        <img src="${images['like.png']}" alt="Like Icon" class="icon"/>
      </div>
      <div class="btn-container">
        <button type="button" class="btn btn-warning comment-btn" id="${id}" data-bs-toggle="modal" data-bs-target="#projectModal">Comment</button>
      </div>
    </div>
  `;
};

const loadPoke = async () => {
  let id = 1;
  const getPokemon = await getPoke();
  getPokemon.forEach((item) => {
    id += 1;
    createGrid(item, id);
    const commentBtns = document.querySelectorAll('.comment-btn');
    commentBtns.forEach((comment) => {
      comment.onclick = (event) => {
        viewPoke(+event.target.id);
      };
    });
  });
};

loadPoke();