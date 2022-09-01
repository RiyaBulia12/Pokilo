import '../css/main.css';
import { loadPoke } from './pokemon.js';

loadPoke();
const navbar = document.querySelector('nav');

window.onscroll = () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};
