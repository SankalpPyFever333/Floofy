import { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { fetchSpecificUserPost } from './fetchPostDataSpecificUser';
import ShowCommentOnPost from '../../HomeComponent/FeedComponent/ShowCommentOnPost';
import DogImage from "../../Assets/dogCat.webp"

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
                  return <Card className='border border-info shadow'   style={{  width: '70%', margin: "1.4rem" }} key={index} >
                        <Card.Img variant="top" src={DogImage} />
                        <Card.Body>
                              <Card.Title>{post.title}</Card.Title>
                              <Card.Text>
                                    {post.caption}
                              </Card.Text>
                              <Card.Text>
                                    hashtags
                              </Card.Text>
                              {post.hashTag.map((ele, index) => {
                                    return <div className="row">
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

export default PostCardSpecificUser;




