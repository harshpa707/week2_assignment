import ProductCard from "../components/ProductCard.jsx";

export default function Product() {

  const product = {
    name: "Wireless Headphones",
    price: 2499,
    category: "Electronics",
    description: "Comfortable wireless headphones with clear sound."
  };

  return (
    <div>
      <h1>Product Information</h1>

      <ProductCard product={product} />
    </div>
  );
}