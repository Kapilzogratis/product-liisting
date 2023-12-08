import { useState } from "react";

export default function Product({ id, image, title, price, description }) {
  const [content, setContent] = useState(false);

  function handleShowDeatails() {
    setContent(!content);
  }

  return (
    <article className="product" style={{ height: content ? "100%" : "480px" }}>
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          {content && <p id={id}>{description}</p>}
        </div>

        <p className="product-actions">
          <button onClick={handleShowDeatails}>Show More</button>
        </p>
      </div>
    </article>
  );
}
