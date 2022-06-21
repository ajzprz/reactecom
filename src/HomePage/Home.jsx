import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Home = () => {
    const [products, setProducts] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    async function fetchData() {
        try {
          let response = await fetch("http://localhost:8000/api/products/");
          const data = await response.json();
          setProducts(data);
          setIsPending(false);
        } catch (err) {
          setError(err.message);
        }
      }
    
    useEffect(() => {
        fetchData();
      });
    
    
  return (
    <section className="products">
    {isPending && !error && <p>Data is Loading...</p>}
    {error && <p>{error}</p>}
    {!isPending &&
      products &&
      products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
      
  </section>
  )
}

export default Home