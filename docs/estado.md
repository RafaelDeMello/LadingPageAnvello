# Estado atual (2026-10-26)

## Objetivo do MVP
Esta landing existe só para **validar o fluxo landing → login em `app.anvello.com.br` → acesso ao módulo de receitas**. Não é a versão final de marketing.

## Pronto
Landing completa (hero, como funciona, cálculo de dose, plantão, planos em breve, FAQ, CTA, rodapé), header mobile com hambúrguer, `/privacidade`, `/termos` (rascunhos com `[A PREENCHER]`), `/404`, Dockerfile + nginx (porta **8080**, healthcheck `/healthz`, usuário não-root). Lint, check e build limpos; layout conferido em 375px, ~800px e 1440px.

## Necessário para o MVP
- Subir a imagem no Dokploy e apontar `anvello.com.br` (chat de infra).
- Confirmar que `https://app.anvello.com.br/entrar` existe e leva ao login e ao módulo de receitas (é o destino de todos os botões "Entrar" e "Começar").
- Preencher `[A PREENCHER]` e revisar juridicamente Privacidade/Termos **antes de divulgar o site ao público** (para teste interno do fluxo, o rascunho basta).

## Adiado (fora do MVP)
- Botão "Avisar quando houver novidade": segue desabilitado; definir onde guardar e-mails só quando houver necessidade (perguntar antes de coletar).
- E-mail de contato: nenhum exibido por ora.
- Medição de acessos: nenhuma. Se quiser, propor solução sem cookie (ex.: Plausible/Umami self-host) e **perguntar**.
- Lighthouse (meta > 95): medir com o site no ar.
- Trocar `public/og.png` por arte final.
- Planos e preços: seção "Planos em breve" até haver definição.
