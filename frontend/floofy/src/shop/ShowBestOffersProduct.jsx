import React from 'react'
import ProductCard from './ProductCard'
import ProductInCart from './ProductInCart'
import ComputeProdPriceInCart from './ComputeProdPriceInCart'

function ShowBestOffersProduct() {
  return (
    <div>
      <h4>Buy our best products</h4>
      {/* Render the card of product */}
      {/* So, fetch all product from the database and using foreach render all them here */}
      {/* <ProductCard imgSrc={"../Assets/icons8-unicorn-64.png"} ProdDescription={"It is an amazing product"} Price={23} ProdName={"GISBD"}/> */}
      <div style={{display:"flex" , justifyContent:"space-evenly"}}>
        {/* <ProductInCart/>
        <ComputeProdPriceInCart/> */}
        
      </div>

    </div>
  )
}

export default ShowBestOffersProduct
