import { useEffect , useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { fetchAllPost } from './getPost';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { IconButton } from '@mui/material';
import ShowCommentOnPost from './ShowCommentOnPost';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function PostCard() {

      const  [posts, setPosts] = useState([]);
      useEffect( ()=>{
            const getDataUseeffect = async ()=>{
                  const postData = await fetchAllPost();
                  const jsonPostData = await postData.json();
                  // console.log("Json post is: " , jsonPostData);
                  setPosts(jsonPostData.AllPost)
                  // console.log("Json usestae post is: " , posts);
            }

            getDataUseeffect();
      },[])

      console.log(posts);

      


      return (
            
                  posts.map((post , index)=>{
                        return <Card style={{ width: '70%' ,  margin:"1.4rem" }} key={index} >
                              <Card.Img variant="top" src="holder.js/100px180" />
                              <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>
                                          {post.caption}
                                    </Card.Text>
                                    <Card.Text>
                                          hashtags
                                    </Card.Text>
                                    {post.hashTag.map((ele, index)=>{
                                          return  <div className="row">
                                                            <Card.Text key={index}>
                                                                  {ele}
                                                            </Card.Text>
                                                      </div>
                                    })}
                                    
                                    
                                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                    <ShowCommentOnPost/>
                                    
                                    
                              </Card.Body>
                        </Card>
                  }
            
            
      ));
}

export default PostCard;

