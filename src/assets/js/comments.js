import { getPoke, getComments, postComments } from './api.js';
import { importImages } from './functions.js';

const images = importImages(require.context('../img', false, /\.(png|jpe?g|svg)$/));
function popupDetails(poke, id) {
  const pokeId = +poke.url.split('/').filter(Boolean).pop();
  if (id === pokeId) {
    document.querySelector('.project-content').innerHTML = `<div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="${images[`${id}.png`]}" alt="pokemon image 1" />
              <h5 class="modal-title">${poke.name}</h5>
              <p> Trick Room: Brave/Quiet. <br>
                Pivot: Relaxed/Sassy. <br>
                Mixed Attacker: Defense-Lowering Natures. <br>
                Special Defense: Careful/Calm. <br>
              </p>
              <h6>Comments()</h6>
            //   <p>"${comments}"</p>
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" id="name" placeholder="Your Name">
            </div>
            <div class="mb-3">
              <textarea type="text" class="form-control" id="comment" placeholder="Your Insights" rows="5"></textarea>
            </div>
            <div class="col-auto">
              <button type="button" id="btnSubmit" class="btn btn-primary mb-3">Submit</button>
            </div>
            <div class="modal-footer">
              <button type="button"  class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>`;
  }
}

export const sendComments = (id) =>{
  const name = document.getElementById('name');
  const comment =document.getElementById('comment');
  const commentBody =  {
    item_id: id,
    name: name.value,
    comment: comment.value,
   }
   postComments(commentBody)
}

export const viewPoke = async (id) => {
    const pokeDetails = await getPoke();
    pokeDetails.forEach((poke) => {
      popupDetails(poke, id);
      const comBtn = document.getElementById('btnSubmit')
      comBtn.addEventListener('click', sendComments(id));       
      });
  };
 
export default { viewPoke };
