import '../css/main.css';
import { loadPoke } from './pokemon.js';

const navbar = document.querySelector('nav');
const playIcon = document.getElementById('play');
const audio = document.getElementById('pikaAudio');
window.onscroll = () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

loadPoke();

audio.volume = 0.1;
playIcon.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playIcon.classList.add('bi-pause-btn');
    playIcon.classList.remove('bi-play-btn');
  } else {
    audio.pause();
    playIcon.classList.add('bi-play-btn')
    playIcon.classList.remove('bi-pause-btn')
  }
})
