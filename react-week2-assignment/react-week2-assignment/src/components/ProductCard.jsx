import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <h2>{product.name}</h2>

      <p>{product.description}</p>

      <p>Category: {product.category}</p>

      <h3>₹{product.price}</h3>
    </div>
  );
}