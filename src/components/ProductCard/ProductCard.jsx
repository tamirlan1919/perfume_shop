import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <>
    <div className="max-w-md bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden">
    <Link to={`products/${product.id}`}>

      <img
    src={product.picture}
    alt={product.name}
        className="w-full h-auto object-cover object-center"
      />
      </Link>
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-600">Бренд: {product.brand}</p>
        <p className="text-lg text-gray-800">
          Цена: ${parseFloat(product.price).toFixed(2)}
        </p>
        {product.is_on_sale && (
          <p className="text-green-600">
            Скидка: {parseFloat(product.sale).toFixed(1)}%
          </p>
        )}
        <div className="flex items-center mt-4">
          <button className="px-4 py-2 bg-[#556638] text-white rounded">
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
    </>

  );
};

export default ProductCard;
