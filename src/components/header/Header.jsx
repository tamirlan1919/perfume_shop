import React from 'react'
import './Header.css'
import {AiOutlineHeart,AiOutlineUser,AiOutlineShopping,AiOutlineSearch} from 'react-icons/ai'
import {FiMapPin} from 'react-icons/fi'
const Header = () => {
  return (
<>

<div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
  <div className='flex items-center'>
    <a href='shops' className='text-1xl flex'><button className='text-2xl mr-5'><FiMapPin /></button> Магазины</a>
  </div>
  <a href="/"><h1 className='uppercase text-center ml-10 text-3xl font-bold text-[#556638]'>Miracle <span className='net text-2xl'>of Fragranse</span>.</h1></a>
  <div className='flex items-center text-3xl'>
    <button className='mr-4'><AiOutlineHeart /></button>
    <button className='mr-4'><AiOutlineSearch /></button>
    <a href="/login"><button className='mr-4'><AiOutlineUser /></button></a>
    <button><AiOutlineShopping /></button>
  </div>
</div>
<nav className="text-black p-4  ">
  <div className="container mx-auto">
    <ul className="flex uppercase text-[14px] leading-6 justify-center  text-black">
      <li className="relative group mr-20">
        <a href="/">Каталог</a>
        <div className="hidden block absolute left-0 mt-2 space-y-2 bg-white text-black group-hover:block">
          <a href="/">Духи</a>
          <a href="/">Парфюм</a>
          <a href="/">Косметика</a>
        </div>
      </li>
      <li className='mr-20'><a href="/">Бренды</a></li>
      <li className='mr-20'><a href="/">Акции</a></li>
      <li className='mr-20'><a href="/">Вакансии</a></li>
      <li><a href="/">О нас</a></li>
    </ul>
  </div>
</nav>

</>
  )
}

export default Header 
