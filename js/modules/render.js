/* ============================================================
   render.js — Builds repeated UI blocks from /js/data/*.js
   Keeping this separate means editing your skills, projects or
   contact links never requires touching index.html.
   ============================================================ */

import { skills } from '../data/skills.js';
import { projects } from '../data/projects.js';
import { contact } from '../data/contact.js';
import { getText } from './i18n.js';

function svgIcon(skill) {
  if (skill.strokeIcon) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${skill.path}</svg>`;
  }
  return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="${skill.path}"/></svg>`;
}

export function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  grid.innerHTML = skills
    .map(
      (s) => `
      <div class="skill-item reveal" data-skill="${s.name}" title="${s.name}">
        <div class="skill-icon">${svgIcon(s)}</div>
        <span>${s.name}</span>
      </div>`
    )
    .join('');
}

function projectCard(p) {
  return `
    <div class="project-card${p.featured ? ' featured' : ''} reveal">
      <div class="project-meta">
        <span class="project-num">${p.num}</span>
        <span class="project-tag" data-i18n="${p.tagKey}">${getText(p.tagKey)}</span>
      </div>
      <h3 class="project-title" data-i18n="${p.titleKey}">${getText(p.titleKey)}</h3>
      <p class="project-desc" data-i18n="${p.descKey}">${getText(p.descKey)}</p>
      <div class="project-stack">${p.stack.map((s) => `<span>${s}</span>`).join('')}</div>
      <div class="project-links">
        <a href="${p.url}" target="_blank" rel="noopener" class="proj-link" data-i18n="proj.link">${getText('proj.link')}</a>
      </div>
      <div class="project-bg-glow"></div>
    </div>`;
}

export function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = projects.map(projectCard).join('');
}

const iconInstagram = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>';
const iconGithub = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.79 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.17.69-3.84-1.35-3.84-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 2.87-.39c.97.01 1.95.13 2.87.39 2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.66 5.34-5.2 5.62.41.36.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z"/></svg>';
const iconWhatsapp = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.29-.15-1.7-.84-1.97-.94-.26-.1-.45-.15-.65.15-.19.29-.74.94-.91 1.13-.17.19-.33.22-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.65-1.58-.9-2.16-.24-.57-.48-.5-.65-.5-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.77.36-.26.29-1 1-1 2.42 0 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.92 4.35.69.3 1.22.47 1.64.61.69.22 1.31.19 1.81.11.55-.08 1.7-.7 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.12-.26-.19-.55-.34zM12.02 22h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.75.98 1-3.66-.24-.38A9.87 9.87 0 0 1 2.1 12C2.1 6.53 6.55 2.08 12.02 2.08c2.65 0 5.14 1.03 7.01 2.9a9.8 9.8 0 0 1 2.9 6.98c0 5.47-4.45 9.94-9.91 9.94zm8.43-18.36A11.93 11.93 0 0 0 12.02 0C5.47 0 .13 5.33.13 11.88c0 2.1.55 4.14 1.6 5.94L.03 24l6.34-1.66a11.87 11.87 0 0 0 5.65 1.44h.01c6.55 0 11.89-5.33 11.89-11.88a11.8 11.8 0 0 0-3.47-8.26z"/></svg>';

export function renderContactLinks() {
  const wrap = document.getElementById('contatoLinks');
  if (!wrap) return;
  wrap.innerHTML = `
    <a href="${contact.instagram.url}" target="_blank" rel="noopener" class="contato-item">
      <div class="contato-icon">${iconInstagram}</div>
      <div>
        <span class="contato-label" data-i18n="contato.instagram.label">${getText('contato.instagram.label')}</span>
        <span class="contato-val">${contact.instagram.handle}</span>
      </div>
      <span class="contato-arrow">→</span>
    </a>
    <a href="${contact.github.url}" target="_blank" rel="noopener" class="contato-item">
      <div class="contato-icon">${iconGithub}</div>
      <div>
        <span class="contato-label" data-i18n="contato.github.label">${getText('contato.github.label')}</span>
        <span class="contato-val">${contact.github.handle}</span>
      </div>
      <span class="contato-arrow">→</span>
    </a>
    <a href="${contact.whatsapp.url}" target="_blank" rel="noopener" class="contato-item">
      <div class="contato-icon">${iconWhatsapp}</div>
      <div>
        <span class="contato-label" data-i18n="contato.whatsapp.label">${getText('contato.whatsapp.label')}</span>
        <span class="contato-val">${contact.whatsapp.display}</span>
      </div>
      <span class="contato-arrow">→</span>
    </a>`;
}

export function renderFooterSocials() {
  const wrap = document.getElementById('footerSocials');
  if (!wrap) return;
  wrap.innerHTML = `
    <a href="${contact.instagram.url}" target="_blank" rel="noopener" class="footer-social-link">${iconInstagram}${contact.instagram.handle}</a>
    <a href="${contact.github.url}" target="_blank" rel="noopener" class="footer-social-link">${iconGithub}${contact.github.handle}</a>
    <a href="${contact.whatsapp.url}" target="_blank" rel="noopener" class="footer-social-link">${iconWhatsapp}WhatsApp</a>`;
}

export function renderAll() {
  renderSkills();
  renderProjects();
  renderContactLinks();
  renderFooterSocials();
}

// Note: these nodes carry data-i18n attributes, so when the language
// toggles, i18n.js's applyToDom() re-translates them in place —
// no need to rebuild the DOM here (that would also reset their
// scroll-reveal state).
