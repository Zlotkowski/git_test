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
let cartItems = [];

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
    cartItems.push(product);
    cartCountElement.textContent = cartCount;
    cartTotalElement.textContent = carttotal.toLocaleString('pl-PL');
    console.log("Dodano produkt:", productId);

    // nowa funkcja - alert z nazwą i ceną produktu
    alert(`Dodano do koszyka: ${product.name} - ${product.price.toLocaleString('pl-PL')} zł`);
}
function cartPreview() {
    if (cartItems.length === 0) {
        alert("Twój koszyk jest pusty.");
        return;
    }

    let message = "Podgląd koszyka:\n\n";
    cartItems.forEach(item => {
        message += `${item.name} - ${item.price.toLocaleString('pl-PL')} zł\n`;
    });
    message += `\nŁącznie: ${carttotal.toLocaleString('pl-PL')} zł`;

    alert(message);
}
cartPreviewButton.addEventListener("click", cartPreview);



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