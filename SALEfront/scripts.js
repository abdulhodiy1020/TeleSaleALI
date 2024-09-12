// Narx bo'yicha filtr funksiyasi
function filterProducts() {
  const minPrice = parseInt(document.getElementById("min-price").value);
  const maxPrice = parseInt(document.getElementById("max-price").value);

  const products = document.querySelectorAll(".product-card");

  products.forEach((product) => {
    const productPrice = parseInt(product.getAttribute("data-price"));

    if (productPrice >= minPrice && productPrice <= maxPrice) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// Mahsulot qidirish funksiyasi
function searchProducts() {
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();
  const products = document.querySelectorAll(".product-card");

  products.forEach((product) => {
    const productName = product.getAttribute("data-name").toLowerCase();

    if (productName.includes(searchInput)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
