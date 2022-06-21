import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const ProductPage = () => {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  async function fetchSingleData() {
    try {
      let response = await fetch(
        `http://localhost:8000/api/products/${productId}`
      );
      const singleData = await response.json();

      console.log(singleData);
      setIsPending(false);
      setSingleProduct(singleData);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchSingleData();
  }, []);

  return (
    <div>
      {isPending && !error && <p>Data is Loading...</p>}
      {error && <p>{error}</p>}
      {!isPending &&
      <ProductDetails product={singleProduct} />
    }
    </div>
  );
};

export default ProductPage;
