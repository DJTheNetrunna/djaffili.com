const categoryButtons = document.querySelectorAll(".category-card");
const products = document.querySelectorAll(".product-card");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

let activeCategory = "all";

function filterProducts() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  products.forEach((product) => {
    const category = product.dataset.category;
    const name = product.dataset.name;

    const matchesCategory =
      activeCategory === "all" || category === activeCategory;

    const matchesSearch = name.includes(query);

    const shouldShow = matchesCategory && matchesSearch;

    product.style.display = shouldShow ? "block" : "none";

    if (shouldShow) visibleCount++;
  });

  emptyState.style.display = visibleCount === 0 ? "block" : "none";
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    activeCategory = button.dataset.category;
    filterProducts();
  });
});

searchInput.addEventListener("input", filterProducts);

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.getElementById("year").textContent = new Date().getFullYear();
