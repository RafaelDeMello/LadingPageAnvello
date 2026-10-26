# Decisões

- **Estilo:** replica o protótipo do Claude Design (creme `#f7f3ee`, cantos arredondados, verde `#2f6f62`), não o "Clinical Swiss" do briefing. Rótulos em caixa alta (Jost, `.4em`) mantidos.
- **Verde:** `#2f6f62` (do protótipo), hover `#3a8071`, escuro `#244d44`. Branco sobre `#2f6f62` ≈ 5.9:1 (AA).
- **Fontes:** Barlow 400–800, Barlow Condensed 700 e Jost (subset latin), extraídas do protótipo e servidas de `/fonts`.
- **Contraste:** `#8a8379` (do protótipo) só em mockups decorativos (`aria-hidden`); texto real usa `#6a645c`.
- **Nome:** produto "ReceitasAI", marca "Anvello". Logo = "A" em SVG + "NVELLO".
- **Planos:** sem valores nem trial. Bloco "Planos em breve" com botão desabilitado; sem e-mail de contato por ora.
- **Cálculo de dose:** demo interativa 100% no navegador, com medicamento fictício ("Medicamento exemplo"). Sem rede, sem storage.
- **Mockups:** sem a "sugestão da IA" do protótipo (recurso em breve) e sem contagem de usos.
- **CSP estrita:** `inlineStylesheets: 'never'` e `assetsInlineLimit: 0` para não precisar de `unsafe-inline`.
- **URLs:** `build.format: 'file'` (`/privacidade` → `privacidade.html`, resolvido no nginx com `try_files`).
- **Imagem OG:** `public/og.png` (1200×630) gerada a partir de SVG; fontes do sistema, trocar por arte final quando houver.
- **TypeScript 6** (o `astro check` ainda não suporta TS 7).
- **Sitemap/robots:** estáticos em `public/`.
