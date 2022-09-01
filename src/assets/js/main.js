import '../css/main.css';

import { getLikes, getPoke } from './api.js';
import { viewPoke } from './comments.js';
import { importImages } from './functions.js';
import { updateLikes } from './likes.js';

const images = importImages(require.context('../img', false, /\.(png|jpe?g|svg)$/));
const grid = document.querySelector('.poke-grid');
const createGrid = (item, id, likes) => {
  grid.innerHTML += `
    <div class="col-3 px-4 pt-4 poke-card">
      <div class="card">
        <div class="desc">
          <i class="bi bi-heart" id="${item?.name}"></i>
          <span class="like-counts" id="like-${item?.name}">${likes}</span>
        </div>
        <img class="card-img py-4 w-75 m-auto" src="${images[`${id}.png`]}" alt="Pokemon Image">
        <div class="card-body">
          <h3 class="card-title text-capitalize">${item.name}</h3>
          <div class="btn-container">
            <button type="button" class="btn comment-btn text-uppercase" id="${id}" data-bs-toggle="modal" data-bs-target="#projectModal">Comment</button>
          </div>
        </div>

    </div>
  </div>`;
  //   <div class="image">
  //     <img src="${images[`${id}.png`]}" alt="pokemon image 1" />
  //   </div>
  //   <div class="desc">
  //     <h3>${item.name}</h3>
  //     <i class="bi bi-heart" id="${item?.name}"></i>
  //     <span class="like-counts" id="like-${item?.name}">${likes}</span>
  //   </div>
  //   <div class="btn-container">
  //     <button type="button" class="btn btn-warning comment-btn" id="${id}" data-bs-toggle="modal" data-bs-target="#projectModal">Comment</button>
  //   </div>
  // </div>
  // `;
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

    // =======
    // import { getPoke } from './api.js';
    // import { viewPoke } from './comments.js';
    // import { importImages } from './functions.js';

    // const images = importImages(require.context('../img', false, /\.(png|jpe?g|svg)$/));
    // const grid = document.querySelector('.poke-grid');
    // const createGrid = (item, id) => {
    //   grid.innerHTML += `
    //     <div class="col-3 ">
    //       <div class="image">
    //         <img src="${images[`${id}.png`]}" alt="pokemon image 1" />
    //       </div>
    //       <div class="desc">
    //         <h3>${item.name}</h3>
    //         <img src="${images['like.png']}" alt="Like Icon" class="icon"/>
    //       </div>
    //       <div class="btn-container">
    //         <button type="button" class="btn btn-warning comment-btn" id="${id}" data-bs-toggle="modal" data-bs-target="#projectModal">Comment</button>
    //       </div>
    //     </div>
    //   `;
    // };

    // const loadPoke = async () => {
    //   let id = 1;
    //   const getPokemon = await getPoke();
    //   getPokemon.forEach((item) => {
    //     id += 1;
    //     createGrid(item, id);
    // >>>>>>> 3fc844d071526692b4d574b58b074ae97493bc17
    const commentBtns = document.querySelectorAll('.comment-btn');
    commentBtns.forEach((comment) => {
      comment.onclick = (event) => {
        viewPoke(+event.target.id);
      };
    });
  });
};

// <<<<<<< HEAD
loadPoke();
// =======
// loadPoke();
// >>>>>>> 3fc844d071526692b4d574b58b074ae97493bc17
