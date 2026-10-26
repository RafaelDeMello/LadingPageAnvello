# Estado atual (2026-10-26)

## Pronto
Landing completa (hero, como funciona, cálculo de dose, plantão, planos em breve, FAQ, CTA, rodapé), `/privacidade`, `/termos` (rascunhos com `[A PREENCHER]`), `/404`, Dockerfile + nginx (porta 8080), lint e check limpos.

## Pendente / depende do dono
- Preencher `[A PREENCHER]` e revisão jurídica de Privacidade/Termos.
- Definir onde guardar e-mails para "Avisar quando houver novidade" (botão desabilitado até lá).
- Definir e-mail de contato (hoje nenhum é exibido).
- Medição de acessos: nenhuma. Se quiser, propor solução sem cookie (ex.: Plausible/Umami self-host) e **perguntar**.
- Trocar `public/og.png` por arte final, se desejado.
- Medir Lighthouse (meta > 95) com o site no ar.
- Workflow de CI e domínio: chat de infra (Dokploy). Porta exposta: **8080**; healthcheck em `/healthz`.
