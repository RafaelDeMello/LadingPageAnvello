// Rolagem suave até a seção sem alterar a URL (sem hash e sem history.pushState).
// Sem JS, os links continuam funcionando como âncoras normais.

const normalize = (path: string) =>
  path.replace(/\/index\.html$/, '').replace(/\.html$/, '').replace(/\/$/, '');

const menu = document.querySelector<HTMLDetailsElement>('[data-menu]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

document.addEventListener('click', (event) => {
  if (event.defaultPrevented || event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const link = (event.target as Element).closest<HTMLAnchorElement>('a[href]');
  if (!link || link.target === '_blank') return;

  const url = new URL(link.href, location.href);
  if (url.origin !== location.origin || !url.hash) return;
  if (normalize(url.pathname) !== normalize(location.pathname)) return;

  const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
  if (!target) return;

  event.preventDefault();
  if (menu) menu.open = false;

  target.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start' });

  // Sem o salto nativo da âncora, o foco precisa ser movido à mão para o teclado seguir dali.
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu?.open) {
    menu.open = false;
    menu.querySelector('summary')?.focus();
  }
});
