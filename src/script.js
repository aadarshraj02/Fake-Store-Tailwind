const url = "https://fakestoreapi.com/products";
const products = document.querySelector(".products");

async function fetchProducts() {
  const result = await fetch(url);
  const data = await result.json();
  for (const product of data) {
    products.innerHTML += `<img src="${product.image}">
        <h2><strong>Title:</strong> ${product.title}</h2>
        <h3><strong>Price: </strong>${product.price}</h3>
        <h3><strong>Price: </strong>${product.price}</h3>
    `;
  }
}
fetchProducts();
