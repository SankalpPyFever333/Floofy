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
  const [searchQuery , setSearchQuery] = useState('');
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

  // console.log("Value from search in the main shop: " , searchQuery);

  return (
    <div>

    {/* {
        isCartOpen ? <ProductInCart /> : searchProdCard
    } */}


      <SearchAndAppbar setSearchQuery={setSearchQuery} />
      {/* <SearchByCategory  /> */}
      {/* <ShowBestOffersProduct/> */}
      {/* <DisplayReviewOfProductMainComp/> */}

      {/* work on search  */}

      <div className="row">

        <div className="col-3 col-sm-3">
          {
            prod.map((product, index) => {
              if (index % 4 === 0) {
                <div className="w-100"></div>
              }
              if (!searchQuery || searchQuery.trim() === '') {
                return <ProductCard key={product._id.toString()} ProductId={product._id.toString()} ProdName={product.ProductName} imgSrc={product.ImagePath} ProdDescription={product.Description} category={product.Category} DiscountTag={product.DiscountTag} Price={product.Price} />
              }
              else {
                if ((product.ProductName.toLowerCase().includes(searchQuery.toLowerCase())) || (product.Category.toLowerCase().includes(searchQuery.toLowerCase()))) {
                  return (
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
                  );
                }
                else {
                  return null
                }
              }
            })
          }
        </div>
      </div>

      {/* {

        // localStorage.getItem("selectProdCategory") ? prod.filter(filterProd => filterProd.Category in localStorage.getItem("selectProdCategory"))
        prod.map((product , index)=>{
          if(index%4 === 0){
            <div className="w-100"></div>
          }
          if(!searchQuery || searchQuery.trim() === '' ){
            
            return <ProductCard key={product._id.toString()} ProductId={product._id.toString()} ProdName={product.ProductName} imgSrc={product.ImagePath} ProdDescription={product.Description} category={product.Category} DiscountTag={product.DiscountTag} Price={product.Price} /> 
          }
          else{
            if ((product.ProductName.toLowerCase().includes(searchQuery.toLowerCase())) || (product.Category.toLowerCase().includes(searchQuery.toLowerCase()))   ){
              return (
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
              );
            }
            else{
              return null
            }
          }

          
        })
      } */}
    </div>
  )
}

export default MainShopComp



