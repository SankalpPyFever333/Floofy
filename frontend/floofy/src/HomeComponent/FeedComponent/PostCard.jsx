// import { useEffect , useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { fetchAllPost } from './getPost';
// import Checkbox from '@mui/material/Checkbox';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
// import ShowCommentOnPost from './ShowCommentOnPost';
// import DogImage from "../../Assets/dogCat.webp"

// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';

// import Typography from '@mui/material/Typography';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// function PostCard() {

//       const  [posts, setPosts] = useState([]);
//       useEffect( ()=>{
//             const getDataUseeffect = async ()=>{
//                   const postData = await fetchAllPost();
//                   const jsonPostData = await postData.json();
//                   // console.log("Json post is: " , jsonPostData);
//                   setPosts(jsonPostData.AllPost)
//                   // console.log("Json usestae post is: " , posts);
//             }

//             getDataUseeffect();
//       },[])

//       console.log(posts);

      


//       return (
            
//                   posts.map((post , index)=>{
                        
//                         return <Card sx={{ maxWidth: 345 }}>
//                               <CardMedia
//                                     component="img"
//                                     alt="green iguana"
//                                     height="140"
//                                     image= {DogImage}
//                               />
//                               <CardContent>
//                                     <Typography gutterBottom variant="h5" component="div">
//                                           Lizard
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                           Lizards are a widespread group of squamate reptiles, with over 6,000
//                                           species, ranging across all continents except Antarctica
//                                     </Typography>
//                               </CardContent>
//                               <CardActions>
//                                     <Button size="small">Share</Button>
//                                     <Button size="small">Learn More</Button>
//                               </CardActions>
//                         </Card>
//                   }
            
            
//       ));
// }

// export default PostCard;

