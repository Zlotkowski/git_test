const products = [
    {
        id: 1,
        name: "Laptop",
        price: 3499,
        description: "Wydajny laptop do pracy i gier"
    },
    {
        id: 2,
        name: "Myszka",
        price: 99,
        description: "Bezprzewodowa mysz gamingowa"
    },
    {
        id: 3,
        name: "Klawiatura",
        price: 249,
        description: "Mechaniczna klawiatura RGB"
    },
    {
        id: 4,
        name: "Monitor",
        price: 899,
        description: "27 cali Full HD"
    }
];

const cart = {
    items: [],
    count: 0,
    total: 0
};

const ui = {
    products: document.getElementById("products"),
    cartCount: document.getElementById("cart-count"),
    cartTotal: document.getElementById("cart-total"),
    cartItems: document.getElementById("cart-items"),
    slider: document.getElementById("slider"),
    clearCartBtn: document.getElementById("clear-cart-btn"),
    cartPreviewBtn: document.getElementById("cart-preview-btn")
};

const sliderImages = [
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
];

let currentSlide = 0;
let sliderInterval = null;

function formatPrice(price) {
    return `${price.toLocaleString("pl-PL")} zł`;
}

function updateCartSummary() {
    ui.cartCount.textContent = cart.count;
    ui.cartTotal.textContent = cart.total.toLocaleString("pl-PL");
}

function renderProducts() {
    ui.products.innerHTML = "";

    products.forEach(product => {
        const card = createProductCard(product);
        ui.products.appendChild(card);
    });
}

function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";

    const title = document.createElement("h3");
    title.textContent = product.name;

    const description = document.createElement("p");
    description.textContent = product.description;

    const price = document.createElement("div");
    price.className = "price";
    price.textContent = formatPrice(product.price);

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Dodaj do koszyka";
    button.addEventListener("click", () => addToCart(product.id));

    card.append(title, description, price, button);

    return card;
}

function renderCartItems() {
    ui.cartItems.innerHTML = "";

    if (cart.items.length === 0) {
        const li = document.createElement("li");
        li.textContent = "Koszyk jest pusty";
        ui.cartItems.appendChild(li);
        return;
    }

    cart.items.forEach((item, index) => {
    const li = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = `${item.name} - ${formatPrice(item.price)}`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.type = "button";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () => removeFromCart(index));

    li.append(text, removeBtn);
    ui.cartItems.appendChild(li);
});
}
function removeFromCart(index) {
    const item = cart.items[index];
    if (!item) return;

    cart.items.splice(index, 1);
    cart.count -= 1;
    cart.total -= item.price;

    saveCartToStorage();
    updateCartSummary();
    renderCartItems();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    cart.items.push(product);
    cart.count++;
    cart.total += product.price;

    updateCartSummary();
    renderCartItems();

    // 🔥 z feature/cart-preview
    alert(`Dodano do koszyka: ${product.name} - ${formatPrice(product.price)}`);
}

function cartPreview() {
    if (cart.items.length === 0) {
        alert("Twój koszyk jest pusty.");
        return;
    }

    let message = "Podgląd koszyka:\n\n";

    cart.items.forEach(item => {
        message += `${item.name} - ${formatPrice(item.price)}\n`;
    });

    message += `\nŁącznie: ${formatPrice(cart.total)}`;

    alert(message);
}

function clearCart() {
    cart.items = [];
    cart.count = 0;
    cart.total = 0;

    saveCartToStorage();
    updateCartSummary();
    renderCartItems();
}

function initSlider() {
    ui.slider.innerHTML = "";

    sliderImages.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Baner promocyjny sklepu";
        ui.slider.appendChild(img);
    });

    if (sliderInterval) clearInterval(sliderInterval);
    sliderInterval = setInterval(showNextSlide, 3000);
}

function showNextSlide() {
    currentSlide = (currentSlide + 1) % sliderImages.length;
    ui.slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function bindEvents() {
    ui.clearCartBtn?.addEventListener("click", clearCart);
    ui.cartPreviewBtn?.addEventListener("click", cartPreview);
}

function saveCartToStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem("cart");

    if (!savedCart) return;

    const parsedCart = JSON.parse(savedCart);

    cart.items = parsedCart.items || [];
    cart.count = parsedCart.count || 0;
    cart.total = parsedCart.total || 0;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    cart.items.push(product);
    cart.count++;
    cart.total += product.price;

    saveCartToStorage();
    updateCartSummary();
    renderCartItems();

    alert(`Dodano do koszyka: ${product.name} - ${formatPrice(product.price)}`);
}

function init() {
    loadCartFromStorage();
    renderProducts();
    renderCartItems();
    updateCartSummary();
    initSlider();
    bindEvents();
}

document.addEventListener("DOMContentLoaded", init);