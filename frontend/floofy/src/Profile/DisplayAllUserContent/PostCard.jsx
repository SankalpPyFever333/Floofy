import { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
// import { fetchSpecificUserPost } from './fetchPostDataSpecificUser';
import ShowCommentOnPost from '../../HomeComponent/FeedComponent/ShowCommentOnPost';

import "./postCard.css"
import { fetchAllPost } from '../../HomeComponent/FeedComponent/getPost';
import { handleLikeOnPost } from './postlikehandler';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function PostCardAllUser() {

      const [posts, setPosts] = useState([]);
      useEffect(() => {
            const getDataUseeffect = async()=>{
                  
                  const AllPostData = await fetchAllPost();
                  console.log('data', AllPostData)
                  setPosts(AllPostData.AllPost);
            }

            getDataUseeffect();
      }, [])

      console.log(posts);


      const handleLikeUnlike = async (postId)=>{
            const countLIke = await handleLikeOnPost(postId);
      }


      return (
            

            posts.map((post, index) => {
                  return <Card className='border border-2 shadow-sm  bg-body-tertiary rounded container'   style={{  width: '70%', margin: "1.4rem" }} key={index} >
                              <Card.Body>
                                    <Card.Title className='' style={{display:"inline"}} >
                                          {post.userId.username}
                                    </Card.Title>
                              <hr className='shadow border-1' />
                              </Card.Body>
                              
                        <img src={post.Image} alt=""  style={{width:"100%"}}  />
                        <hr className='shadow border-3' />
                        <Card.Body className='' >
                              <Card.Title className='text-opacity-80 ' >{post.title}</Card.Title>
                              <Card.Text className='text-opacity-34' >
                                    {post.caption}
                              </Card.Text>
                              <Card.Text className='text-light-emphasis' >
                                    hashtags
                              </Card.Text>
                              <div className="d-flex gap-2">
                                    {post.hashTag.map((ele, index) => {
                                          return <small className="">
                                                {ele}
                                          </small>
                                    })}
                                    
                              </div>

                              

                              <Card.Text>
                                          <Checkbox className='pt-3 text-danger' onClick={handleLikeUnlike(post._id)  } {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                          <ShowCommentOnPost postId={post._id}  className="pt-3" />

                              </Card.Text>


                        </Card.Body>
                  </Card>
            }


      ));
}

export default PostCardAllUser;




