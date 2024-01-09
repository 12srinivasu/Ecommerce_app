// components/ProductList/ProductList.js
import React from 'react';
import Product from './Product';
import productsData from '../../data/products.json';
import { Link } from 'react-router-dom';

const ProductList = () => {
  return (
    <center>

    <div>
      
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <ol className="list-decimal">
      {productsData.map((product) => (
        <Product key={product.id} product={product} />
      ))}<br />
      <Link to="/cart"  className="bg-red-500 text-white p-2 rounded-md">Go to Cart</Link>
      </ol>
    </div>
    </center>

  );
};

export default ProductList;
