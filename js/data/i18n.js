/* ============================================================
   i18n.js — Translation dictionary (pt-BR / en)
   Every string on the page lives here. HTML elements opt in
   with a `data-i18n="key"` attribute (see js/modules/i18n.js).
   ============================================================ */

export const DEFAULT_LANG = 'pt';

export const translations = {
  pt: {
    'meta.title': 'Eric Geovane — Desenvolvedor Web',

    'nav.sobre': 'Sobre',
    'nav.skills': 'Skills',
    'nav.projetos': 'Projetos',
    'nav.contato': 'Contato',

    'hero.typed': ['Desenvolvedor Web', 'Front-end Dev', 'Entusiasta de UI'],
    'hero.desc': 'Transformo ideias em experiências digitais modernas, com código limpo e design que impressiona.',
    'hero.cta.projects': 'Ver Projetos',
    'hero.cta.contact': 'Falar comigo',
    'hero.badge': 'Disponível para projetos',
    'code.focus': 'Desenvolvimento Web',
    'code.experience': '+1 ano',
    'code.passion': 'UI criativas',
    'hero.code.status': 'aberto ✓',

    'sobre.label': '01 — Sobre mim',
    'sobre.title1': 'Quem está',
    'sobre.title2': 'por trás do código?',
    'sobre.p1.pre': 'Olá! Sou ',
    'sobre.p1.name': 'Eric Geovane',
    'sobre.p1.post': ', desenvolvedor web apaixonado por criar interfaces que unem estética e funcionalidade. Com mais de um ano de experiência, construo projetos do zero com foco em qualidade, performance e design moderno.',
    'sobre.p2': 'Acredito que um bom produto digital começa numa boa conversa — e termina num código bem feito.',
    'stat.exp': 'ano de experiência',
    'stat.lines': 'linhas de código',
    'stat.dedication': 'dedicação',
    'stat.location': 'baseado no Brasil',
    'lang.pt.name': 'Português',
    'lang.pt.level': 'Nativo',
    'lang.en.name': 'Inglês',
    'lang.en.level': 'Conversação',

    'habilidades.label': '02 — Habilidades',
    'habilidades.title1': 'Minhas',
    'habilidades.title2': 'ferramentas',

    'projetos.label': '03 — Projetos',
    'projetos.title1': 'O que eu',
    'projetos.title2': 'construí',
    'proj.tag.webapp': 'Web App',
    'proj.tag.frontend': 'Front-end',
    'proj.tag.fullstack': 'Full Stack',
    'proj.title.1': 'Landing Page Moderna',
    'proj.desc.1': 'Interface responsiva com animações CSS e design focado em conversão. Construída com HTML, CSS e JavaScript puro.',
    'proj.title.2': 'Dashboard de Dados',
    'proj.desc.2': 'Painel interativo com gráficos dinâmicos e componentes reutilizáveis em React.',
    'proj.title.3': 'Aplicação Web Completa',
    'proj.desc.3': 'Projeto completo com back-end em Node.js, autenticação e banco de dados integrado.',
    'proj.link': 'Ver no Instagram →',
    'projetos.cta.text': 'Quer ver mais projetos?',
    'projetos.cta.btn': 'Visitar @geovanecodes',

    'contato.label': '04 — Contato',
    'contato.title1': 'Vamos',
    'contato.title2': 'trabalhar juntos?',
    'contato.p': 'Estou disponível para projetos freelance, colaborações e oportunidades. Escolha um canal ou me manda uma mensagem!',
    'contato.instagram.label': 'Instagram',
    'contato.github.label': 'GitHub',
    'contato.whatsapp.label': 'WhatsApp',
    'form.name.label': 'Nome',
    'form.name.placeholder': 'Seu nome',
    'form.email.label': 'E-mail',
    'form.email.placeholder': 'seuemail@exemplo.com',
    'form.msg.label': 'Mensagem',
    'form.msg.placeholder': 'Conte um pouco sobre seu projeto...',
    'form.submit': 'Enviar mensagem',
    'form.sending': 'Enviando...',
    'form.success': '✓ Mensagem enviada com sucesso!',

    'footer.copy': '© 2026 Eric Geovane. Feito com 💜 e muito café.',
    'footer.top': '↑ Topo',

    'lang.toggle.aria': 'Mudar idioma do site'
  },

  en: {
    'meta.title': 'Eric Geovane — Web Developer',

    'nav.sobre': 'About',
    'nav.skills': 'Skills',
    'nav.projetos': 'Projects',
    'nav.contato': 'Contact',

    'hero.typed': ['Web Developer', 'Front-end Dev', 'UI Enthusiast'],
    'hero.desc': 'I turn ideas into modern digital experiences, with clean code and design that leaves an impression.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': "Let's talk",
    'hero.badge': 'Available for projects',
    'code.focus': 'Web Development',
    'code.experience': '+1 year',
    'code.passion': 'Creative UI',
    'hero.code.status': 'open ✓',

    'sobre.label': '01 — About me',
    'sobre.title1': "Who's",
    'sobre.title2': 'behind the code?',
    'sobre.p1.pre': "Hey! I'm ",
    'sobre.p1.name': 'Eric Geovane',
    'sobre.p1.post': ", a web developer passionate about building interfaces that blend aesthetics and function. With over a year of experience, I build projects from scratch with a focus on quality, performance and modern design.",
    'sobre.p2': 'I believe a good digital product starts with a good conversation — and ends with well-crafted code.',
    'stat.exp': 'year of experience',
    'stat.lines': 'lines of code',
    'stat.dedication': 'dedication',
    'stat.location': 'based in Brazil',
    'lang.pt.name': 'Portuguese',
    'lang.pt.level': 'Native',
    'lang.en.name': 'English',
    'lang.en.level': 'Conversational',

    'habilidades.label': '02 — Skills',
    'habilidades.title1': 'My',
    'habilidades.title2': 'toolkit',

    'projetos.label': '03 — Projects',
    'projetos.title1': 'What I',
    'projetos.title2': 'built',
    'proj.tag.webapp': 'Web App',
    'proj.tag.frontend': 'Front-end',
    'proj.tag.fullstack': 'Full Stack',
    'proj.title.1': 'Modern Landing Page',
    'proj.desc.1': 'Responsive interface with CSS animations and conversion-focused design. Built with plain HTML, CSS and JavaScript.',
    'proj.title.2': 'Data Dashboard',
    'proj.desc.2': 'Interactive panel with dynamic charts and reusable React components.',
    'proj.title.3': 'Full Web Application',
    'proj.desc.3': 'Complete project with a Node.js back-end, authentication and an integrated database.',
    'proj.link': 'View on Instagram →',
    'projetos.cta.text': 'Want to see more projects?',
    'projetos.cta.btn': 'Visit @geovanecodes',

    'contato.label': '04 — Contact',
    'contato.title1': "Let's",
    'contato.title2': 'work together?',
    'contato.p': "I'm available for freelance projects, collaborations and opportunities. Pick a channel or send me a message!",
    'contato.instagram.label': 'Instagram',
    'contato.github.label': 'GitHub',
    'contato.whatsapp.label': 'WhatsApp',
    'form.name.label': 'Name',
    'form.name.placeholder': 'Your name',
    'form.email.label': 'Email',
    'form.email.placeholder': 'youremail@example.com',
    'form.msg.label': 'Message',
    'form.msg.placeholder': 'Tell me a bit about your project...',
    'form.submit': 'Send message',
    'form.sending': 'Sending...',
    'form.success': '✓ Message sent successfully!',

    'footer.copy': '© 2026 Eric Geovane. Made with 💜 and lots of coffee.',
    'footer.top': '↑ Top',

    'lang.toggle.aria': 'Switch site language'
  }
};
