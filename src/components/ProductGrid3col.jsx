import React from "react";
import styles from "../ProductGrid3col.module.css";

const ProductGrid3col = (props) => {
  // const products = props.products
  // const tits = props.tits
  return (
    <div className={styles.gridContainer}>
      {props.products.map((product, index) => (
        <div key={index} className={styles.gridItem}>
          <img
            src={product.image}
            alt={`Product ${index + 1}`}
            // style={{ maxWidth: "100%" }}
          />
          <p dangerouslySetInnerHTML={{ __html: product.description }} />
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid3col;
