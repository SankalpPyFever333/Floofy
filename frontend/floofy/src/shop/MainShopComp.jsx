import React, { useEffect, useState } from 'react'
import SearchAndAppbar from './SearchAndAppbar'
import SearchByCategory from './SearchByCategory'
import ShowBestOffersProduct from './ShowBestOffersProduct'
import ProductCard from './ProductCard'
import { fetchProducts } from './fetchProductfromDb'
// import DisplayReviewOfProductMainComp from './DisplayReviewOfProductMainComp'


function MainShopComp() {
  const [prod ,setProd] = useState([]);
  const [lsGetCategory , setLSGetCategory] = useState([]);
  const [isCartOpen , setIsCartOpen] = useState(true)
  useEffect(()=>{
    async function fetchDataFromDb(){
      const response = await fetchProducts();
      const jsonProd = await response.json();
      const AllProdFromDb = jsonProd.All_prod_response;
      console.log(AllProdFromDb)
        setProd(jsonProd.All_prod_response);
    }
    fetchDataFromDb();
    setLSGetCategory(localStorage.getItem("selectProdCategory"));
  }, [])  

  return (
    <div>

    {/* {
        isCartOpen ? <ProductInCart /> : searchProdCard
    } */}


      <SearchAndAppbar/>
      <SearchByCategory  />
      {/* <ShowBestOffersProduct/> */}
      {/* <DisplayReviewOfProductMainComp/> */}

      {/* work on search  */}
      {

        localStorage.getItem("selectProdCategory") ? prod.filter(filterProd => filterProd.Category in localStorage.getItem("selectProdCategory")) :
        prod.map((product)=>{
          return <ProductCard key={product._id.toString()} ProductId={product._id.toString()} ProdName={product.ProductName} imgSrc={product.ImagePath} ProdDescription={product.Description} category={product.Category} DiscountTag={product.
          DiscountTag} Price={product.Price} /> 
        })
      }
    </div>
  )
}

export default MainShopComp



