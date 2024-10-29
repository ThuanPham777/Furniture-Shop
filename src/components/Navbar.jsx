import React from 'react';
import { Link } from 'react-router-dom';
import CartOffset from './shop/CartOffset';
import WishlistOffset from './shop/WishlistOffset';

import { IoHomeOutline } from 'react-icons/io5';
import { BsShop } from 'react-icons/bs';
import { BsCart4 } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';

const Navbar = () => {
  const navItems = [
    { label: 'Home', path: '/', icon: IoHomeOutline },
    { label: 'Shop', path: '/shop', icon: BsShop },
    { label: 'Cart', path: '/cart', icon: BsCart4 },
    { label: 'Wishlist', path: '/wishlist', icon: FaRegHeart },
  ];

  return (
    <>
      <div className='w-full flex justify-center py-4 items-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
        <div className='w-10/12 flex justify-center py-4 px-2 items-center'>
          <div className='flex-1'>
            <h1 className='logo font-bold text-2xl'>Furniture</h1>
          </div>
          <div className='flex-1 flex justify-center items-center'>
            {/* Hiển thị danh sách điều hướng chỉ ở màn hình md trở lên */}
            <ul className='hidden sm:flex gap-4'>
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className='hover:text-lime-500'
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* reponsive (show nav sm tro xuong)*/}
          </div>
          <div className='flex-1 text-xl gap-2 flex justify-end items-center'>
            <WishlistOffset />
            <CartOffset />
          </div>
        </div>
      </div>
      <div className='bg-white py-3 fixed bottom-0 w-full z-50 sm:hidden block transition-all duration-150 ease-linear'>
        <ul className='flex sm:justify-center justify-around items-center w-full'>
          {navItems.map((item, index) => (
            <li
              key={index}
              className='bg-lime-500 rounded-full p-3'
            >
              <Link
                to={item.path}
                className=''
              >
                <item.icon className='w-6 h-6' /> {/* Render the icon here */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
