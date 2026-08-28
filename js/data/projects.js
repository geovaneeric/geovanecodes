/* ============================================================
   projects.js — Project showcase data
   `descKey` / `titleKey` map into the i18n dictionary so each
   project renders in the active site language.
   ============================================================ */

export const projects = [
  {
    num: '01',
    tagKey: 'proj.tag.webapp',
    titleKey: 'proj.title.1',
    descKey: 'proj.desc.1',
    stack: ['HTML', 'CSS', 'JS'],
    url: 'https://davimenezes.vercel.app/',
    featured: true
  },
  {
    num: '02',
    tagKey: 'proj.tag.frontend',
    titleKey: 'proj.title.2',
    descKey: 'proj.desc.2',
    stack: ['React', 'CSS', 'API'],
    url: 'https://instagram.com/geovanecodes',
    featured: false
  },
  {
    num: '03',
    tagKey: 'proj.tag.fullstack',
    titleKey: 'proj.title.3',
    descKey: 'proj.desc.3',
    stack: ['Node.js', 'React', 'DB'],
    url: 'https://instagram.com/geovanecodes',
    featured: false
  }
];
