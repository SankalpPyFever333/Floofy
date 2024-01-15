import React, { useEffect, useState } from 'react'
import SearchAndAppbar from './SearchAndAppbar'
import SearchByCategory from './SearchByCategory'
import ShowBestOffersProduct from './ShowBestOffersProduct'
import ProductCard from './ProductCard'



function MainShopComp() {
  const [prod ,setProd] = useState([]);
  const [isCartOpen , setIsCartOpen] = useState(true)
  useEffect(()=>{
      
      
      fetchProducts();
      
      
  }, [])  
  const fetchProducts = async (req,res) => {
   
    const response = await fetch("http://localhost:3000/api/getProductFromShop" , {
        method:'GET',
        headers:{
          'Content-Type':"application/json"
        } 
      })
      
      if (!response.ok) {
        console.log("network error")
      }
      const jsonProd = await response.json()
    console.log("Data from database", jsonProd)

      setProd(jsonProd.All_prod_response)
    
  }
  return (
    <div>

    {/* {
        isCartOpen ? <ProductInCart /> : searchProdCard
    } */}


      <SearchAndAppbar/>
      <SearchByCategory/>
      <ShowBestOffersProduct/>
      {

        prod.map((product)=>{
          return <ProductCard key={product._id.toString()} ProdName={product.ProductName} imgSrc={product.ImagePath} ProdDescription={product.Description} category={product.Category} DiscountTag={product.
          DiscountTag} Price={product.Price} />
        })
      
      }
    </div>
  )
}

export default MainShopComp



