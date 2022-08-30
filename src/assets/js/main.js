import '../css/main.css';
import { getPoke } from './api.js';

function importImages(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importImages(require.context('../img', false, /\.(png|jpe?g|svg)$/));
const grid = document.querySelector('.poke-grid');
const createGrid = (item, id) => {
  grid.innerHTML +=
    `
    <div class="col-3 ">
      <div class="image">
        <img src="${images[`pokemon${id}.png`]}" alt="pokemon image 1" />
      </div>
      <div class="desc">
        <h2>${item.name}</h2>
        <img src="${images[`like.png`]}" alt="Like Icon" />
      </div>
      <div class="btn-container">
        <button type="button" class="btn btn-warning comment-btn">Comment</button>
      </div>
    </div>
  `;
}

const loadPoke = async () => {
  const getPokemon = await getPoke();
  getPokemon.map((item, id) => {
    id += 1;
    createGrid(item, id);
  })
}

loadPoke();
