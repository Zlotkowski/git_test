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

const productsContainer = document.getElementById("products");
const cartCountElement = document.getElementById("cart-count");

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
    cartCountElement.textContent = cartCount;
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