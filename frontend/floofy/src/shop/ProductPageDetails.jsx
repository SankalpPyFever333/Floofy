import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductsUsingId } from './fetchProductUsingId';
import { fetchReviewOfProduct } from './fetchReviewOfProduct';
import { useNavigate } from 'react-router-dom';
import TakeDeliveryAddress from './TakeDeliveryAddress';
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';


function ProductPageDetails() {
      const { ProductId } = useParams();
      const [prodReviews, setProdReviews] = useState([]);
      const [prod, setProd] = useState([]);
      const [comment, setComment] = useState();
      const navigate = useNavigate();

      let avgRating = prodReviews.map((SingleReview)=>{
            let sumRating = 0;
            sumRating+= SingleReview.Rating;
            return sumRating/prodReviews.length;
      })



      const fetchSpecificProduct = async()=>{
            const fetchedProdReponse = await fetchProductsUsingId(ProductId)
            const jsonProdResponse = await fetchedProdReponse.json();
            const AllProdFromDb = jsonProdResponse.ProdResponse;
            console.log(AllProdFromDb)
            setProd(jsonProdResponse.ProdResponse);
      }

      const fetchProductreviews = async()=>{
            const fetchedreviewProduct = await fetchReviewOfProduct(ProductId);
            const jsonFetchedReviews = await  fetchedreviewProduct.json(); 
            console.log("fetched Reviews: " , jsonFetchedReviews);
            setProdReviews(jsonFetchedReviews.review);

      }

      const discountedPrice = prod.Price - ((prod.Price) * prod.DiscountTag)/100
      useEffect(()=>{
            fetchSpecificProduct();
            fetchProductreviews();
      } , [])

      console.log("useState product: " , prod);
      console.log("useState review" , prodReviews);

      const handleBuyNow = ()=>{
            navigate(`/GotoDeliveryPage/${ProductId}/${discountedPrice}`)
      }


      const handlePostProductReview = ()=>{
            // save the product review in the review model
      }


  return (

      

    <div>
      <div className="row">
                    <div className="col-sm-4">
                  
                  <img src={prod.ImagePath} alt="" />
                  <div className="d-flex gap-2 m-5">
                                <button className='btn btn-primary rounded m-2 p-2 ' >Add To Cart</button>
                                <button onClick={handleBuyNow} className='btn btn-warning rounded m-2 p-2 ' >Buy now</button>
                                
                  </div>

            </div>
                  <div className="col-sm-8 border-start shadow ">
                  <h4 className='m-3 p-2' >Product details</h4>
                          <span className='m-2 p-2 fs-4 ' >Name: {prod.ProductName} </span>
                          <div className="container m-2 p-2">
                                <span className='fs-5' >Rs. {discountedPrice} </span>
                                <span className='text-decoration-line-through' >{prod.Price} </span>
                              <span className='text-success ms-2' >{prod.DiscountTag}% off </span>
                          </div>

                          <span className='m-2 p-2 fs-6 ' >{prod.Description} </span>
                          <br />
                          <br />
                          <span className='m-2 p-2 fs-6 text-success' >You save Rs. {prod.Price - discountedPrice} on this order</span>
                          <br />
                          <span className='m-2 p-2 fs-6 text-danger ' >Only  4 are in stocks </span>
                        <br />
                          <span className={avgRating > 3.5 ? 'm-2 p-2 fs-6 text-success' : 'm-2 p-2 fs-6 text-danger'  } >Rating: {avgRating} </span>
                          
                        
            </div>
      </div>

      <div className='container-fluid' >
            <span className='fs-6 m-3' >Product Reviews</span>
                    <div className="showUsername font-monospace text-body-secondary fs-6 m-3 ">

                          {
                                prodReviews.map((singleReviews) => {
                                      // console.log(singleComment.user.username)
                                      
                                      return <div>
                                            <p>
                                                  {singleReviews.UserName}
                                            </p>

                                            <small>{singleReviews.Comment}</small>
                                            <br />
                                            <small className={singleReviews.Rating > 3.5 ? ' fs-6 text-success' : ' fs-6 text-danger'} > Rating: {singleReviews.Rating}</small>

                                            <hr className='h-1 shadow' />
                                      </div>
                                })
                          }

                    </div>
                    <div className="row position-absolute  bottom-0 start-2 w-100"  >
                          <div className="col-sm-8">
                                <TextField fullWidth label="Post Your Review" value={comment} id="fullWidth" onChange={(e) => {
                                      setComment(e.target.value)

                                }} color='secondary' />
                          </div>
                          <div className="col-sm-2">
                                <Button variant="info" onClick={handlePostProductReview} style={{ height: "3.5rem", width: "4rem" }} >Post</Button>{' '}
                          </div>
                    </div>
      </div>
      
    </div>
  )
}

export default ProductPageDetails
