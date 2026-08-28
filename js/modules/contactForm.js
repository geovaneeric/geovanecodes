/* ============================================================
   contactForm.js — Simulated contact-form submission
   No backend is wired up yet: swap the setTimeout block for a
   real fetch() to your API or a service like Formspree when
   you're ready to receive messages for real.
   ============================================================ */

import { getText } from './i18n.js';

export function initContactForm() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const success = document.getElementById('formSuccess');
  if (!form || !submitBtn || !success) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.textContent = getText('form.sending');
    submitBtn.disabled = true;

    setTimeout(() => {
      form.reset();
      submitBtn.textContent = getText('form.submit');
      submitBtn.disabled = false;
      success.classList.add('show');
      setTimeout(() => success.classList.remove('show'), 4000);
    }, 1200);
  });
}
