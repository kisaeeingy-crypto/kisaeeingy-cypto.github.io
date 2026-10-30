(() => {
  if (window.parent === window) return;

  const root = document.documentElement;
  const body = document.body;
  root.style.minHeight = '0';
  root.style.overflow = 'hidden';
  body.style.minHeight = '0';
  body.style.overflow = 'hidden';

  function measureContent() {
    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight
    );
    window.parent.postMessage({ type: 'frame-content-height', height }, '*');
  }

  function reportHashTarget() {
    const targetId = decodeURIComponent(window.location.hash.slice(1));
    const target = targetId && document.getElementById(targetId);
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY;
    window.parent.postMessage({ type: 'frame-content-hash', top }, '*');
  }

  function reportScrollIntent(direction) {
    if (direction) {
      window.parent.postMessage({ type: 'frame-scroll-intent', deltaY: direction }, '*');
    }
  }

  const resizeObserver = new ResizeObserver(measureContent);
  resizeObserver.observe(root);
  resizeObserver.observe(body);
  new MutationObserver(measureContent).observe(root, {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  });

  window.addEventListener('resize', measureContent);
  window.addEventListener('wheel', (event) => reportScrollIntent(event.deltaY), { passive: true });
  window.addEventListener('keydown', (event) => {
    if (['ArrowDown', 'PageDown', ' '].includes(event.key)) reportScrollIntent(100);
    if (['ArrowUp', 'PageUp', 'Home'].includes(event.key)) reportScrollIntent(-100);
  });
  window.addEventListener('touchstart', (event) => {
    const touch = event.touches[0];
    if (touch) body.dataset.lastTouchY = String(touch.clientY);
  }, { passive: true });
  window.addEventListener('touchmove', (event) => {
    const touch = event.touches[0];
    const previousY = Number(body.dataset.lastTouchY);
    if (!touch || !Number.isFinite(previousY)) return;
    reportScrollIntent(previousY - touch.clientY);
    body.dataset.lastTouchY = String(touch.clientY);
  }, { passive: true });
  window.addEventListener('hashchange', reportHashTarget);
  window.addEventListener('load', () => {
    measureContent();
    reportHashTarget();
  });
  document.addEventListener('load', measureContent, true);
  window.addEventListener('message', (event) => {
    if (event.source === window.parent && event.data?.type === 'frame-measure-request') {
      measureContent();
    }
  });

  measureContent();
})();
