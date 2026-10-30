(() => {
  const cartStorageKey = 'freezeDriedCart';
  const sizePrices = { small: 15, medium: 20, large: 25 };
  const products = new Set(window.FREEZE_DRY_CATALOG.products.map((product) => product.id));
  const feedbackTimers = new WeakMap();

  function createItemId(product) {
    return `${product}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }

  function readCart() {
    const storedCart = JSON.parse(localStorage.getItem(cartStorageKey) || '[]');
    if (!Array.isArray(storedCart)) {
      throw new Error('Data keranjang tidak valid.');
    }
    return storedCart;
  }

  function notifyParent(cart) {
    if (window.parent === window) return;

    const count = cart.reduce((total, item) => total + (Number(item.quantity) || 0), 0);
    window.parent.postMessage({ type: 'freeze-dried-cart-updated', count }, '*');
  }

  function showFeedback(status, message) {
    window.clearTimeout(feedbackTimers.get(status));
    status.textContent = message;
    status.classList.add('is-visible');
    feedbackTimers.set(status, window.setTimeout(() => {
      status.textContent = '';
      status.classList.remove('is-visible');
    }, 2500));
  }

  document.addEventListener('click', (event) => {
    const button = event.target.closest('.add-to-cart');
    if (!button) return;

    const card = button.closest('.product-card, .home-product-card');
    const status = card?.querySelector('.add-to-cart-status');
    const product = button.dataset.product;
    const icon = button.querySelector('.add-to-cart-icon');
    if (icon) {
      icon.classList.remove('is-adding');
      void icon.offsetWidth;
      icon.classList.add('is-adding');
    }

    if (!status) return;

    try {
      if (!products.has(product)) {
        throw new Error(`Produk cart tidak dikenal: ${product}`);
      }

      const cart = readCart();
      const productQuantity = cart
        .filter((item) => item.product === product)
        .reduce((total, item) => total + Math.max(0, Number(item.quantity) || 0), 0);
      if (productQuantity >= 99) {
        showFeedback(status, 'Maksimal 99 produk per jenis.');
        return;
      }

      const matchingItems = cart.filter((item) => (
        item.product === product
        && item.variant === 'normal-sugar'
        && item.size === 'small'
      ));
      if (matchingItems.length) {
        const existingItem = matchingItems[0];
        existingItem.quantity = matchingItems.reduce(
          (total, item) => total + Math.max(0, Number(item.quantity) || 0),
          1
        );
        const duplicates = new Set(matchingItems.slice(1));
        const normalizedCart = cart.filter((item) => !duplicates.has(item));
        localStorage.setItem(cartStorageKey, JSON.stringify(normalizedCart));
      } else {
        cart.push({
          id: createItemId(product),
          product,
          variant: 'normal-sugar',
          size: 'small',
          quantity: 1,
          unitPrice: sizePrices.small
        });
        localStorage.setItem(cartStorageKey, JSON.stringify(cart));
      }
      notifyParent(JSON.parse(localStorage.getItem(cartStorageKey) || '[]'));
      showFeedback(status, 'Sudah ditambahkan ke cart.');
    } catch (error) {
      console.error('Gagal menambahkan produk ke cart:', error);
      showFeedback(status, 'Produk gagal ditambahkan. Coba lagi.');
    }
  });
})();
