import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductsUsingId } from './fetchProductUsingId';
import { fetchReviewOfProduct } from './fetchReviewOfProduct';

function ProductPageDetails() {
      const { ProductId } = useParams();
      const [prodReviews, setProdReviews] = useState([]);
      const [prod, setProd] = useState([]);

      const fetchSpecificProduct = async()=>{
            const fetchedProdReponse = await fetchProductsUsingId(ProductId)
            const jsonProdResponse = await fetchedProdReponse.json();
            const AllProdFromDb = jsonProdResponse.ProdResponse;
            console.log(AllProdFromDb)
            setProd(jsonProdResponse.ProdResponse);
      }

      const fetchProductreviews = async()=>{
            const fetchedreviewProduct = await fetchReviewOfProduct(ProductId);
            console.log("fetched Reviews: " , fetchedreviewProduct);
            setProdReviews(fetchedreviewProduct.review);

            // solve the error here of undefined.

      }

      useEffect(()=>{
            fetchSpecificProduct();
            fetchProductreviews();
      } , [])

      console.log("useState product: " , prod);
      console.log("useState review" , prodReviews);

  return (

      

    <div>
      <div className="row">
                    <div className="col-sm-4">
                  
                  <img src={prod.ImagePath} alt="" />
                  <div className="d-flex gap-2 m-5">
                                <button className='btn btn-primary rounded m-2 p-2 ' >Add To Cart</button>
                                <button className='btn btn-warning rounded m-2 p-2 ' >Add To Cart</button>
                  </div>

            </div>
                  <div className="col-sm-8 border-start shadow ">
                  <h4 className='m-3 p-2' >Product details</h4>
                          <span className='m-2 p-2 fs-4 ' >Name: {prod.ProductName} </span>
                          <div className="container m-2 p-2  ">
                                <span className='fs-5' >Rs. {prod.Price} </span>
                                <span className='text-decoration-line-through' >{prod.Price} </span>
                              <span className='text-success ms-2' >{prod.DiscountTag}% off </span>
                          </div>

                          <span className='m-2 p-2 fs-6 ' >Description: {prod.Description} </span>
                        
            </div>
      </div>

      <div>
            <h3>Product Reviews</h3>
                    <div className="showUsername font-monospace text-body-secondary fs-6 ">

                          {
                                prodReviews.review.map((singleReviews) => {
                                      // console.log(singleComment.user.username)
                                      return <div>
                                            <p>
                                                  {singleReviews.UserName}
                                            </p>

                                            <small>{singleReviews.Comment}</small>

                                            <hr className='h-1 shadow' />
                                      </div>
                                })
                          }
                    </div>
      </div>
      
    </div>
  )
}

export default ProductPageDetails
