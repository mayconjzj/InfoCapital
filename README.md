# InfoCapital

Portal brasileiro de notícias sobre mercado financeiro, empresas, economia, política e investimentos.

## Stack

- Next.js 16 com App Router
- React 19 e TypeScript em modo estrito
- Tailwind CSS 4
- ESLint 9 com configuração flat do Next.js
- Prettier com plugin de ordenação de classes Tailwind
- GitHub Actions para validação contínua

## Requisitos

- Node.js 20.9 ou superior
- npm

## Desenvolvimento local

```bash
npm install
npm run dev
```

A aplicação ficará disponível em http://localhost:3000.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
```

## Estrutura

```
src/
  app/
    globals.css
    layout.tsx
    page.tsx
.github/
  workflows/
    quality.yml
```

## Estado atual

A homepage é uma primeira fundação visual responsiva. Os textos e matérias são demonstrativos; não representam notícias publicadas nem fatos atuais. O painel de mercado ainda não consulta cotações reais.

Ainda não estão implementados CMS, banco de dados, autenticação, pesquisa funcional, cadastro de newsletter ou integração com provedores de notícias e cotações.
