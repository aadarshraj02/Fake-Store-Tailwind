const url = "https://fakestoreapi.com/products";
const products = document.querySelector(".products");

async function fetchProducts() {
  const result = await fetch(url);
  const data = await result.json();
  for (const product of data) {
    products.innerHTML += `
    <div class="bg-white p-4 rounded-lg shadow-md">
    <img src="${product.image}" class = "w-full h-16 object-cover mb-4 rounded">
        <h2 class = "text-xl"><strong>Title:</strong> ${product.title}</h2>
        <h3><strong>Price: </strong>${product.price}</h3>
        <h3><strong>Price: </strong>${product.price}</h3>
        </div
    `;
  }
}
fetchProducts();
