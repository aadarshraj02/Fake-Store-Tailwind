async function fetchProducts() {
  const url = "https://fakestoreapi.com/products";
  const result = await fetch(url);
  const data = await result.json();
  console.log(data);
}
fetchProducts();
