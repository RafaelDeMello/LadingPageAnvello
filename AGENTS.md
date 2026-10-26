# AGENTS.md

Landing estática da **Anvello** (produto: **ReceitasAI**) em https://anvello.com.br.
O app vive em outro repositório (`app.anvello.com.br`); aqui só há links para ele.

## Stack
Astro (estático) + Tailwind v4 · pnpm · Node 22 · nginx (não-root, porta **8080**).

## Comandos
`pnpm dev` · `pnpm build` · `pnpm preview` · `pnpm lint` · `pnpm check`

## Regras
- **Todo texto** fica em `src/content/site.ts`. Componentes só renderizam.
- Sem preços, sem "7 dias grátis". O que não existe aparece com selo "Em breve" (`Badge`).
- Entrar/Começar → `https://app.anvello.com.br/entrar` (`APP_URL`).
- Privacidade: sem analytics, sem cookies, sem coleta de dados, sem CDN externa (fontes em `public/fonts`).
  Perguntar antes de coletar qualquer dado ou medir acessos.
- CSP estrita (`script-src 'self'; style-src 'self'`): **não usar `style=""`, `<style>` ou scripts inline**; use classes Tailwind.
- Exemplos nos mockups: fictícios e genéricos. Nunca dados de paciente.
- Não criar `.github/` (deploy é do chat de infra / Dokploy).
- Não commitar sem pedido; entregar mensagem em Conventional Commits.

Decisões e estado: `docs/decisoes.md`, `docs/estado.md`. Referência visual: `docs/referencia/landing/`.
