import { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { fetchSpecificUserPost } from './fetchPostDataSpecificUser';
import ShowCommentOnPost from '../../HomeComponent/FeedComponent/ShowCommentOnPost';
import DogImage from "../../Assets/dogCat.webp"

import "./postCard.css"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function PostCardSpecificUser() {

      const [posts, setPosts] = useState([]);
      useEffect(() => {
            const getDataUseeffect = async(userId)=>{
                  const SpecificData = await fetchSpecificUserPost(userId);
                  console.log('data', SpecificData)
                  setPosts(SpecificData.UserPost);
            }

            getDataUseeffect(localStorage.getItem("userId"));
      }, [])

      console.log(posts);




      return (
            

            posts.map((post, index) => {
                  return <Card className='border border-2 shadow-sm  bg-body-tertiary rounded container'   style={{  width: '70%', height:"40%" , margin: "1.4rem" }} key={index} >
                              <Card.Body>
                                    <Card.Title className='' style={{display:"inline"}} >
                                          Username
                                    </Card.Title>
                              <hr className='shadow border-1' />
                              </Card.Body>
                              
                        <img src={DogImage} alt="" className='w-100' style={{height:"200px" , width:"70%"}}  />
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
                                          <Checkbox className='pt-3 text-danger' {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                          <ShowCommentOnPost postId={post._id}  className="pt-3" />

                              </Card.Text>


                        </Card.Body>
                  </Card>
            }


      ));
}

export default PostCardSpecificUser;




