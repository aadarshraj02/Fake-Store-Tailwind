const url = "https://fakestoreapi.com/products";

async function fetchProducts() {
  const result = await fetch(url);
  const data = await result.json();
  console.log(data);
}
fetchProducts();
