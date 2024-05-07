import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DecrementIncrementBtn from './DecrementIncrementBtn';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ProductId , imgSrc , category , DiscountPercentage,  ProdDescription , Price , ProdName}) {
      let [productCount , setProductCount] = React.useState(0);
      const navigate = useNavigate();
      const handleAddToCart = ()=>{
            productCount =  ++productCount;
            console.log(productCount)
            setProductCount(productCount)
            
      }
      const Addbtn = <Button onClick={handleAddToCart} size="small" variant="contained">Add to cart</Button>;
// When productCount is 0 , render the ADD To cart button else render the - + button with count value.

console.log("image url:" , imgSrc)

// Problem is that after rendering add button again, then it is not re rendering the buttongroup bcoz after that it is coming to this component for rendering the AddBtn.

      const handleCardClick = ()=>{
            navigate(`/productDetailsPage/${ProductId}`)
      }


      return (
      
            <Card
                  sx={{
                        maxWidth: "14rem",
                        cursor: "pointer",
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                        border: "10px solid #f0f0f0",
                        borderRadius: "10px",
                        // transition: "transform 0.2s",
                        // "&:hover": {
                        //       transform: "translateY(-5px)",
                        //       boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                        //       border: "2px solid #ccc",
                        // }
                  }}
                  onClick={handleCardClick}
            >
                  <CardMedia
                        component="img"
                        alt={category}
                        height="150"
                        image={imgSrc}
                        sx={{
                              borderTopLeftRadius: "8px",
                              borderTopRightRadius: "8px",
                        }}
                  />
                  <CardContent>
                        <Typography
                              gutterBottom
                              variant="h6"
                              component="div"
                              sx={{
                                    fontFamily: "Arial, sans-serif",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    color: "#333",
                              }}
                        >
                              {ProdName}
                        </Typography>
                        <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{
                                    fontFamily: "Arial, sans-serif",
                                    fontSize: "14px",
                                    color: "#666",
                              }}
                        >
                              {ProdDescription}
                        </Typography>
                  </CardContent>
                  <CardActions
                        sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              backgroundColor: "#f9f9f9",
                              borderBottomLeftRadius: "8px",
                              borderBottomRightRadius: "8px",
                        }}
                  >
                        <Typography
                              variant="body2"
                              color="text.primary"
                              sx={{
                                    fontFamily: "Arial, sans-serif",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    color: "#555",
                                    marginLeft: "12px",
                              }}
                        >
                              Rs.{Price}
                        </Typography>
                  </CardActions>
            </Card>
      );
}
