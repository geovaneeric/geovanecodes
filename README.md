# Eric Geovane — Portfólio

Site pessoal / portfólio de desenvolvedor web. PT-BR e EN, sem build step — HTML, CSS e JS puros com módulos ES.

🔗 **[Ver demo](./index.html)**

## Estrutura do projeto

```
geovanecodes/
├── index.html              # Marcação — sem textos "hardcoded" fora do PT padrão
├── package.json
├── README.md
├── .gitignore
├── css/
│   ├── base.css            # Tokens (cores, fontes, espaçamento), reset, tipografia
│   ├── layout.css           # Header, hero, grids de cada seção
│   ├── components.css       # Botões, cards, badges, formulário
│   └── animations.css       # Keyframes, cursor, canvas, reveal on scroll
└── js/
    ├── main.js              # Ponto de entrada — importa e inicia todos os módulos
    ├── data/
    │   ├── skills.js         # Lista de habilidades (ícones inline em SVG)
    │   ├── projects.js       # Lista de projetos
    │   ├── contact.js        # Instagram, GitHub e WhatsApp — edite só aqui
    │   └── i18n.js           # Dicionário de tradução PT/EN
    └── modules/
        ├── i18n.js           # Motor de tradução (aplica o dicionário ao DOM)
        ├── render.js         # Constrói skills/projetos/contatos a partir dos dados
        ├── cursor.js         # Cursor customizado
        ├── particles.js      # Fundo animado em canvas
        ├── nav.js             # Header no scroll, menu mobile, link ativo
        ├── reveal.js          # Animações de entrada ao rolar a página
        ├── typed.js           # Efeito de digitação da tag do hero
        └── contactForm.js     # Envio simulado do formulário de contato
```

## Por que essa separação?

- **`css/`** dividido por responsabilidade (tokens → layout → componentes → animação), então dá pra mudar a paleta de cores inteira editando só `base.css`.
- **`js/data/`** guarda só dados. Quer adicionar um projeto novo, trocar seu WhatsApp ou uma skill? Edita o arquivo certo em `data/`, sem tocar em HTML nem lógica.
- **`js/modules/`** guarda só comportamento, um arquivo por responsabilidade, importados via ES Modules em `main.js`.

## Editar conteúdo

| Quero mudar...              | Edito o arquivo...          |
|------------------------------|------------------------------|
| Projetos exibidos            | `js/data/projects.js`        |
| Skills/ferramentas           | `js/data/skills.js`          |
| Instagram, GitHub, WhatsApp  | `js/data/contact.js`         |
| Textos em PT e EN            | `js/data/i18n.js`            |
| Cores, fontes, espaçamento   | `css/base.css`               |

## Rodar localmente

Como usa `type="module"`, o navegador bloqueia `fetch`/imports se você abrir o `index.html` direto com `file://`. Sirva com um servidor local:

```bash
npm install
npm run dev
```

Isso abre em `http://localhost:5500`. Alternativa sem instalar nada:

```bash
npx serve .
# ou
python3 -m http.server 5500
```

## Idiomas (PT/EN)

O botão `lang.set(en)` no header traduz o site inteiro e lembra a escolha do visitante (via `localStorage`). Todo o texto vem de `js/data/i18n.js` — para adicionar uma frase nova, crie a chave nos dois idiomas (`pt` e `en`) e use `data-i18n="sua.chave"` no HTML, ou `getText('sua.chave')` no JS.

## Deploy

Site 100% estático — funciona em GitHub Pages, Vercel, Netlify ou qualquer hospedagem simples. Nenhuma variável de ambiente é necessária.
