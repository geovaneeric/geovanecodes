/* ============================================================
   main.js — Entry point
   Loaded via <script type="module" src="js/main.js"> in
   index.html. Order matters: i18n and data-driven rendering
   run first so every other module works with final content.
   ============================================================ */

import { initI18n, getText, onLangChange } from './modules/i18n.js';
import { renderAll } from './modules/render.js';
import { initCursor } from './modules/cursor.js';
import { initParticles } from './modules/particles.js';
import { initNav } from './modules/nav.js';
import { initReveal } from './modules/reveal.js';
import { initTyped } from './modules/typed.js';
import { initContactForm } from './modules/contactForm.js';

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  renderAll();

  initCursor();
  initParticles();
  initNav();
  initReveal();
  initContactForm();
  initTyped(getText('hero.typed'));

  // Restart the typewriter with the new language's phrases on toggle
  onLangChange(() => initTyped(getText('hero.typed')));

  document.body.classList.add('loaded');
});
