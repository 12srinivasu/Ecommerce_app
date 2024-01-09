import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id, 10));
  

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>&#x20B9;{product.price}</p>

    </div>
  );
};

export default ProductDetail;
