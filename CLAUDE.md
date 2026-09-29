# CLAUDE.md

## O que é este projeto

Site em React (Vite) da lore de **Sidara Elunara**, personagem de D&D 5e — barda do Colégio das Espadas, meio-elfa, pirata, ex-capitã da Lágrima de Prata e amante da deusa Selûne. O site apresenta a lore em tópicos selecionáveis na página inicial.

## Fonte de verdade

- A lore canônica completa está em `src/lore.jsx`, no array `topics`. **Nunca invente, altere ou "melhore" fatos da lore por conta própria** — qualquer mudança de conteúdo narrativo deve ser pedida explicitamente pela autora.

## Estrutura

- `src/App.jsx` — página inicial (lista de tópicos) e visualização de artigo. Roteamento simples via `useState`, sem react-router.
- `src/lore.jsx` — dados dos tópicos. Cada tópico: `{ id, title, summary, content }` (JSX) ou `{ id, title, summary, comingSoon: true }` para os ainda não publicados.
- `src/index.css` — tema visual completo.
- `vite.config.js` — `base: '/rpg-sidara/'` para GitHub Pages. Não remover.

## Como adicionar uma seção da lore

1. No `src/lore.jsx`, remova o `comingSoon: true` do tópico (ou crie um novo objeto) e adicione o `content` em JSX.
2. Siga o padrão dos tópicos existentes: parágrafos em `<p>`, ênfases em `<em>`, separadores de cena com `<p className="beat">· · ·</p>` apenas em viradas narrativas fortes.
3. Não usar bullets, listas numeradas nem headers dentro do corpo do artigo — a lore é prosa corrida.

## Tema visual (não alterar sem pedir)

- Paleta: noite oceânica (`--night: #070c14`), prata (`--silver: #dde8f4`), e **azul lunar** (`--moon: #7ab4d8`) como único acento. O azul lunar remete à Selûne e à identidade da personagem — não introduzir outras cores de destaque.
- Tipografia: Cinzel (títulos, eyebrows, labels) + Spectral (corpo). Carregadas via Google Fonts no `index.html`.
- Capitular lunar no primeiro parágrafo do artigo e linha vertical com degradê lunar na margem são assinatura visual — manter.

## Assets

- Colocar imagens em `public/assets/img/` e vídeos em `public/assets/video/`.
- Referenciar com `${import.meta.env.BASE_URL}assets/...`.
- O hero suporta vídeo em `public/assets/video/sidara_hero.mp4` — se não existir, simplesmente não exibe nada no fundo do hero.

## Nomes canônicos

- **Sidara Elunara** (nome completo)
- **Lágrima de Prata** (navio)
- **Sorriso da Rainha** (navio de Kell)
- **Portões da Lua** (reino de Selûne em Ysgard)
- **Argentil** (salão de Selûne)
- **Selûne** (deusa da lua)
- **Umberlee** (deusa do mar)
- **Orvel** (o velho marinheiro que ensinou a gaita)
- **Kell / Ulrec Kell** (capitão do Sorriso da Rainha)
- **Brann Pederneira** (intendente anão)
- **Mirelle** (elfa da lua, timoneira)
- **Tam** (cozinheiro)

## Convenções

- Idioma do site e do código de conteúdo: português (pt-BR).
- Manter o site simples: sem dependências novas sem necessidade real, sem router, sem gerenciador de estado.

## Comandos

```bash
npm install      # instalar dependências
npm run dev      # desenvolvimento
npm run build    # build para dist/
```
