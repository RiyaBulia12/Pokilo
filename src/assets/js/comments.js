import { getPoke } from './api.js';
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
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>`;
  }
}

export const viewPoke = async (id) => {
  const pokeDetails = await getPoke();
  pokeDetails.forEach((poke) => {
    popupDetails(poke, id);
  });
};

export default { viewPoke };