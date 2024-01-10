import React, { useEffect, useState } from 'react'
import SearchAndAppbar from './SearchAndAppbar'
import SearchByCategory from './SearchByCategory'
import ShowBestOffersProduct from './ShowBestOffersProduct'
import ProductCard from './ProductCard'

import Button from '@mui/material/Button';
import ProductInCart from './ProductInCart'
function MainShopComp() {
  const [prod ,setProd] = useState([]);
  const [isCartOpen , setIsCartOpen] = useState(true)
  useEffect(()=>{
      
      
      fetchProducts();
      
  }, [])
  const fetchProducts = async (req,res) => {
   
    const response = await fetch("http://localhost:3001/getProductFromShop" , {
        method:'GET',
        headers:{
          'Content-Type':"application/json"
        } 
      })
      
      if (!response.ok) {
        console.log("network error")
      }
      const data = await response.json()
      console.log("Data from database", data)
      setProd(data)
  }
  const searchProdCard = `${ <SearchAndAppbar/>}
      ${<SearchByCategory/>}
      ${<ShowBestOffersProduct/>}
      `
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



