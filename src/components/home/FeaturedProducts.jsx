import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import { FaArrowRightLong } from 'react-icons/fa6';

const FeaturedProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./img/Products/products.json')
      .then((res) => res.json())
      .then((data) => setData(data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div
        className='w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1
     py-3 gap-3'
      >
        {data.length > 0 &&
          data.slice(0, 6).map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>
      <div className='flex w-full justify-center items-center'>
        <button className='flex gap-2 items-center justify-center mx-auto font-bold hover:text-lime-400 transition-all duration-500 ease-linear'>
          view more <FaArrowRightLong />{' '}
        </button>
      </div>
    </>
  );
};

export default FeaturedProducts;
