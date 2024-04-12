

import React, { useEffect, useState } from 'react';
import SearchAndAppbar from './SearchAndAppbar';
import ProductCard from './ProductCard';
import { fetchProducts } from './fetchProductfromDb';

function MainShopComp() {
  const [prod, setProd] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchDataFromDb() {
      const response = await fetchProducts();
      const jsonProd = await response.json();
      setProd(jsonProd.All_prod_response);
    }
    fetchDataFromDb();
  }, []);

  const filteredProducts = prod.filter((product) =>
    product.ProductName.toLowerCase().includes(searchQuery.toLowerCase()) || (product.Category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div>
      <SearchAndAppbar setSearchQuery={setSearchQuery} />

      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product._id} className="col-3 col-sm-3">
            <ProductCard
              key={product._id.toString()}
              ProductId={product._id.toString()}
              ProdName={product.ProductName}
              imgSrc={product.ImagePath}
              ProdDescription={product.Description}
              category={product.Category}
              DiscountTag={product.DiscountTag}
              Price={product.Price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainShopComp;

