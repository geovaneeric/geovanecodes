/* ============================================================
   i18n.js — Runtime translation engine
   Walks any element with [data-i18n] / [data-i18n-placeholder]
   and swaps in the string for the active language. Language
   choice is remembered in localStorage across visits.
   ============================================================ */

import { translations, DEFAULT_LANG } from '../data/i18n.js';

const STORAGE_KEY = 'geovanecodes-lang';
let currentLang = DEFAULT_LANG;
const listeners = [];

export function getLang() {
  return currentLang;
}

export function getText(key) {
  return translations[currentLang]?.[key] ?? translations[DEFAULT_LANG][key] ?? key;
}

export function onLangChange(fn) {
  listeners.push(fn);
}

function applyToDom() {
  document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
  document.title = getText('meta.title');

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = getText(key);
    if (typeof value === 'string') el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', getText(key));
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    el.setAttribute('aria-label', getText(key));
  });

  const toggleLabel = document.getElementById('langToggleLabel');
  if (toggleLabel) toggleLabel.textContent = currentLang === 'pt' ? 'en' : 'pt';
}

export function setLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* storage unavailable, ignore */ }
  applyToDom();
  listeners.forEach((fn) => fn(currentLang));
}

export function initI18n() {
  let saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (_) { /* ignore */ }

  const browserLang = (navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'pt';
  currentLang = saved && translations[saved] ? saved : browserLang;

  applyToDom();

  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      setLang(currentLang === 'pt' ? 'en' : 'pt');
    });
  }
}
