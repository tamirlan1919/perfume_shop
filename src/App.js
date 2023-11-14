import { useState,useEffect } from 'react';
import './App.css';
import ProductCard from './components/ProductCard/ProductCard';
import CarousBrands from './components/carousel-brands/CarousBrands';
import Carousel from './components/carousel/Carousel';
import Header from './components/header/Header';
import Nav from './components/Nav/Nav';
import Shops from './components/Shops/Shops';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserIcon from './components/UserIcon/UserIcon';
import ProductDetails from './components/ProductDeatils/ProductDetails';

function App() {

    // const [products, setProducts] = useState([]);
  // const apiUrl = 'http://127.0.0.1:8000/api/products/?format=json';

  // useState(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(apiUrl);
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      {/* подстановочный путь */}
      <Route path="/" element={<All />} />
      <Route path="shops" element={<Shops />} />
      <Route
          path="products/:id"
          element={<ProductDetails />}
        />
      <Route path="login" element={<UserIcon />} />

    </Routes>
  </BrowserRouter>

    



  );
}
const All = () => {
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
  return (
<>

    <Carousel/>
    <CarousBrands/>
    <div className="container mx-auto p-4">
    <h1 className='text-2xl text-center py-10'>Новинки</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div> 
</>
  )
}
export default App;
