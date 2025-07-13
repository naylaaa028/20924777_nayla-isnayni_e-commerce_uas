// Tangkap semua kartu produk
const products = document.querySelectorAll('.product-card');

// Tambahkan event klik ke masing-masing produk
const addToCartButtons = document.querySelectorAll('.add-to-cart');

function getCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // biar gak ikut buka link
    const productCard = button.closest('.product-card');
    const name = productCard.querySelector('h2').textContent;
    const price = productCard.querySelector('.price').textContent;
    const product = { name, price };

    const cart = getCart();
    cart.push(product);
    saveCart(cart);

    alert(`"${name}" berhasil dibeli!`);
  });
});

  });
});
// Ambil semua tombol "Tambah ke Keranjang"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Fungsi untuk ambil keranjang dari localStorage (jika ada)
function getCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

// Fungsi untuk simpan keranjang ke localStorage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Tambahkan event listener ke setiap tombol
addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const productCard = e.target.closest('.product-card');
    const name = productCard.querySelector('h2').textContent;
    const price = productCard.querySelector('.price').textContent;
    const product = { name, price };

    const cart = getCart();
    cart.push(product);
    saveCart(cart);

    alert(`Terima kasih! Anda telah membeli: "${name}"`);
  });
});

