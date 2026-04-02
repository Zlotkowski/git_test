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

let cartCount = 0;
let carttotal = 0;


const productsContainer = document.getElementById("products");
const cartCountElement = document.getElementById("cart-count");
const cartTotalElement = document.getElementById("cart-total");

function renderProducts() {
    productsContainer.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">${product.price} zł</div>
            <button onclick="addToCart(${product.id})">Dodaj do koszyka</button>
        `;

        productsContainer.appendChild(card);
    });
}

function addToCart(productId) {
    cartCount++;
    cartCountElement.textContent = cartCount;
    console.log("Dodano produkt:", productId);
}

renderProducts();

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cartCount++;
    carttotal += product.price;
    cartCountElement.textContent = cartCount;
    cartTotalElement.textContent = carttotal.toLocaleString('pl-PL');
    console.log("Dodano produkt:", productId);

    // nowa funkcja - alert z nazwą i ceną produktu
    alert(`Dodano do koszyka: ${product.name} - ${product.price.toLocaleString('pl-PL')} zł`);
}

function renderProducts() {
    productsContainer.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">${product.price.toLocaleString('pl-PL')} zł</div>
            <button onclick="addToCart(${product.id})">Dodaj do koszyka</button>
        `;

        productsContainer.appendChild(card);
    });
}

const sliderContainer = document.getElementById("slider");

const sliderImages = [
  "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

sliderImages.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  sliderContainer.appendChild(img);
});

let currentSlide = 0;

function showNextSlide() {
  currentSlide++;
  if (currentSlide >= sliderImages.length) currentSlide = 0;
  sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(showNextSlide, 3000);