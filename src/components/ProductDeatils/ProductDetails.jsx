import React from 'react';
import './ProductDeatils.css'
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
  const { id } = useParams();
  const products = [
    {
      "id": 1,
      "name": "Black Orchid",
      "brand": "Tom Ford",
      "description": "",
      "price": "3500.00",
      "sale_price": "3000.00",
      "picture": "https://www.letu.ru/common/img/pim/2023/05/EX_4a5e8175-9c99-4ea5-b55f-2fe693659ec2.jpg",
      "quantity": 163,
      "is_on_sale": true,
      "sale": "10",
      "image_sale": null,
      "category": null,
      "images": [],
      "reviews": []
    },
    {
      "id": 2,
      "name": "Oud Wood",
      "brand": "Tom Ford",
      "description": "",
      "price": "5500.00",
      "sale_price": "5000.00",
      "picture": "https://www.letu.ru/common/img/pim/2023/09/EX_10e974fa-2449-447d-a455-93c504817202.jpg",
      "quantity": 123,
      "is_on_sale": true,
      "sale": '15',
      "image_sale": null,
      "category": null,
      "images": [],
      "reviews": []
    },
    {
      "id": 3,
      "name": "Ombre Leather Parfum",
      "brand": "Tom Ford",
      "description": "",
      "price": "14389.00",
      "sale_price": "14000.00",
      "picture": "https://www.letu.ru/common/img/pim/2023/09/EX_9767a339-7fa3-43ef-a400-06c450415f73.jpg",
      "quantity": 112,
      "is_on_sale": true,
      "sale": '10',
      "image_sale": null,
      "category": null,
      "images": [],
      "reviews": []
    },
    {
      "id": 4,
      "name": "Noir Extreme",
      "brand": "Tom Ford",
      "description": "",
      "price": "11890.00",
      "sale_price": "11000.00",
      "picture": "https://www.letu.ru/common/img/pim/2023/05/EX_0bd74382-3c00-4f3c-959c-3097e236281e.jpg",
      "quantity": 123,
      "is_on_sale": true,
      "sale": '5',
      "image_sale": null,
      "category": null,
      "images": [],
      "reviews": []
    }
  ];

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    // Если товар не найден, вы можете отобразить сообщение об ошибке или перенаправить пользователя на другую страницу
    return (
      <div>
        <h2>Товар не найден</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-md p-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mb-4 md:mb-0">
            <img src={product.picture} alt={product.name} className="w-full h-auto object-cover" />
          </div>
          <div>
            <p className='pt-10 text-[17px] font-[400] leading-[24px] text-[#585858]'>Главная > Бренды > Tom Ford</p>
            <h2 className="text-[36px] pr_name font-[300]  mb-10 uppercase leading-[32px] mt-10 text-gray-800">{product.name}</h2>
            <p className="text-gray-600 text-sm mb-2">Бренд: {product.brand}</p>
            <p className="text-gray-600 text-sm mb-2">ID: {product.id}</p>
            <p className="text-gray-800 text-lg">Цена: ${parseFloat(product.price).toFixed(2)}</p>
            {product.is_on_sale && (
              <p className="text-green-600">Скидка: {parseFloat(product.sale).toFixed(1)}%</p>
            )}

            {/* Другие детали товара */}
            <div className="mt-4">
              <button className="px-4 py-2 bg-[#556638] text-white rounded">Добавить в корзину</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
