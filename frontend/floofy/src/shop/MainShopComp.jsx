import React, { useEffect, useState } from 'react'
import SearchAndAppbar from './SearchAndAppbar'
import SearchByCategory from './SearchByCategory'
import ShowBestOffersProduct from './ShowBestOffersProduct'
import ProductCard from './ProductCard'
import axios from "axios";
import Button from '@mui/material/Button';
function MainShopComp() {
  const [prod ,setProd] = useState([]);
  useEffect(()=>{
      
      
      fetchProducts();
      
  }, [])
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/getProductFromShop" , {
        method:'GET',
        headers:{
          'Content-Type':"application/json"
        } 
      })

      // const response = await axios.get("./http://localhost:3000/getProductFromShop");

      if (!response.ok) {
        console.log("network error")
      }
      const data = await response.json()
      console.log("Data from database", data)
      setProd(data)


    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <SearchAndAppbar/>
      <SearchByCategory/>
      <ShowBestOffersProduct/>
      <Button onClick={fetchProducts} >show</Button>
      {/* fetch all the product and usimg foreach , render this component */}
      {
        prod.map((product)=>{
          return <div style={{display:"flex" , justifyContent:"space-between"}}>
            <ProductCard ProdName={product.ProductName} imgSrc={product.ImagePath} ProdDescription={product.Description} Price={product.Price} />
          </div>

      }) 
        
        // prod.forEach((product)=>{
        //   console.log(product)
        //   return <ProductCard ProdName={product.ProductName} imgSrc={product.ImagePath} ProdDescription={product.Description} Price={product.Price} ProdKey={product._id} />
        // })
      }
      {/* <ProductCard/> */}

    </div>
  )
}

export default MainShopComp



