import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DecrementIncrementBtn from './DecrementIncrementBtn';

export default function ProductCard({imgSrc , category , DiscountTag,  ProdDescription , Price , ProdName}) {
      let [productCount , setProductCount] = React.useState(0);
      const handleAddToCart = ()=>{
            productCount =  ++productCount;
            console.log(productCount)
            setProductCount(productCount)
            
      }
      const Addbtn = <Button onClick={handleAddToCart} size="small" variant="contained">Add to cart</Button>;
// When productCount is 0 , render the ADD To cart button else render the - + button with count value.


// Problem is that after rendering add button again, then it is not re rendering the buttongroup bcoz after that it is coming to this component for rendering the AddBtn.


      return (
      
            <Card sx={{ maxWidth: "14rem" }} style={{margin:5}}>
                  <CardMedia
                        component="img"
                        alt= {category}
                        height="100"
                        image={imgSrc}
                  />
                  <CardContent>
                        <Typography gutterBottom variant="h6" style={{
                              fontFamily:"serif",
                              fontSize:"15px",
                              fontWeight:"bolder",
                              color:"ActiveCaption"
                        }} component="div">
                              {ProdName}
                        </Typography>
                        <Typography variant="body2"  color="text.secondary">
                              {ProdDescription}
                        </Typography>
                  </CardContent>
                  <CardActions style={{display:"flex" , justifyContent:"space-between" , backgroundColor:"lightgoldenrodyellow"}}>
                        <Typography variant="body2" color="text.primary">
                              {Price}
                        </Typography>
                        {
                              
                              productCount ? <DecrementIncrementBtn productCount={productCount} setProductCount={setProductCount} AddBtn={Addbtn} handleAddBtn={handleAddToCart} /> : Addbtn
                        }
                        
                  </CardActions>
            </Card>
      );
}
