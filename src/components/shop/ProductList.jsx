import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import SortDropdown from './SortDropdown';

const ProductList = () => {
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]); // Store initial data

  useEffect(() => {
    fetch('./img/Products/products.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
        setInitialData(data.products); // Save initial data
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <SortDropdown
        initialData={initialData}
        sortedData={setData}
      />
      <div className='w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-3 gap-3'>
        {data.length > 0 &&
          data.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductList;
