/* ============================================================
   typed.js — Typewriter effect for the hero tag
   Re-readable: call again after a language switch to restart
   with the new set of phrases.
   ============================================================ */

let intervalId = null;

export function initTyped(texts) {
  const heroTag = document.querySelector('.hero-tag');
  if (!heroTag || !texts || !texts.length) return;

  if (intervalId) clearInterval(intervalId);

  let idx = 0;
  let charIdx = 0;
  let deleting = false;
  let waiting = false;

  function tick() {
    if (waiting) return;
    const current = texts[idx];

    if (!deleting) {
      heroTag.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        deleting = true;
        waiting = true;
        setTimeout(() => { waiting = false; }, 1800);
      }
    } else {
      heroTag.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        idx = (idx + 1) % texts.length;
      }
    }
  }

  intervalId = setInterval(tick, 80);
}
