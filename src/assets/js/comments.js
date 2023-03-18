import { getPoke, getComments, postComments } from './api.js';
import images from './images.js';

const getPokeId = (url) => +url.split('/').filter(Boolean).pop();

const popupDetails = (poke, id) => {
  const pokeId = getPokeId(poke.url);
  if (id === pokeId) {
    document.querySelector('.pokemon-content').innerHTML = `<div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
              <div class="d-flex">
              <div class="modal-desc">
                <img src="${images[`${id}.png`]}" alt="pokemon image 1" class="modal-img"/>
                <h3 class="card-title text-capitalize mt-3" style="text-align: left">${poke.name}</h3>
                <p class="skills"> Trick Room: Brave/Quiet. <br>
                  Pivot: Relaxed/Sassy. <br>
                  Mixed Attacker: Defense-Lowering Natures. <br>
                  Special Defense: Careful/Calm. <br>
                </p>
              </div>
              <div class="modal-comment">
                <h6>Comments (<span class="commentCount" id="commentCount"></span>)</h6>
                <div class="comment-section"></div>
              </div>
              </div>
              <div class="mb-3">
                  <input type="text" class="form-control" id="name" placeholder="Your Name">
                </div>
                <div class="mb-3">
                  <textarea type="text" class="form-control" id="comment" placeholder="Your Insights" rows="5"></textarea>
                </div>
                <div class="col-auto">

                  <button type="button" class="btn comment-btn text-uppercase" id="btnSubmit">Submit</button>
                </div>
            </div>
          </div>
        </div>
      </div>`;
  }
};

export const commsCount = (comments) => (comments ? comments.length : 0);

const getCommentList = async (id) => {
  const comments = await getComments(id);
  const commentSection = document.querySelector('.comment-section');
  commentSection.innerHTML = '';
  comments.forEach((item) => {
    const p = document.createElement('li');
    p.innerHTML = `<span class="author">${item.username}</span> : ${item.comment}`;
    commentSection.append(p);
    const count = commsCount(comments);
    document.getElementById('commentCount').innerHTML = `${count}`;
  });
};

const sendComments = async (id) => {
  const name = document.getElementById('name');
  const comment = document.getElementById('comment');
  const commentBody = {
    item_id: id,
    username: name.value,
    comment: comment.value,
  };
  await postComments(commentBody);
  getCommentList(id);
  name.value = '';
  comment.value = '';
};

const viewPoke = async (id) => {
  const pokeDetails = await getPoke();
  pokeDetails.forEach(async (poke) => {
    await popupDetails(poke, id);
    const comBtn = document.getElementById('btnSubmit');
    comBtn.addEventListener('click', () => {
      const pokeId = getPokeId(poke.url);
      if (id === pokeId) {
        sendComments(id);
      }
    });
  });
  getCommentList(id);
};

export default viewPoke;
