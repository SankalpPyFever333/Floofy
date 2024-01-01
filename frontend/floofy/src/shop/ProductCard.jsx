import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductCard({imgSrc , ProdDescription , Price ,ProdKey, ProdName}) {
      return (
            <Card sx={{ maxWidth: 240 }} style={{margin:12}}>
                  <CardMedia
                        component="img"
                        alt="Dog Food"
                        height="170"
                        image={imgSrc}
                  />
                  <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                              {ProdName}
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                              {ProdDescription}
                        </Typography>
                  </CardContent>
                  <CardActions style={{display:"flex" , justifyContent:"space-between" , backgroundColor:"lightgoldenrodyellow"}}>
                        <Typography variant="body2" color="text.primary">
                              {Price}
                        </Typography>
                        <Button size="small" variant="contained">Add to cart</Button>
                  </CardActions>
            </Card>
      );
}
