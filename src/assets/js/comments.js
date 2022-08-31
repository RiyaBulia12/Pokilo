// import './main.js'
import { getPoke } from './api.js'


export const viewPoke = async (id) => {
    const pokeDetails = await getPoke() 
    pokeDetails.map(poke => {
        popupDetails(poke, id)
    })  
}

function popupDetails(poke, id) {
    const pokeId = +poke.url.split('/').filter(Boolean).pop()
    if(id === pokeId) {
        document.querySelector('.project-content').innerHTML = `<div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>`
    }
}
