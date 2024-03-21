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
import { CountNumberOfLikes } from '../../HomeComponent/FeedComponent/countLikesONPost';
// import { post } from '../../../../../backend/Routes/ContentRoutes/handleLikeUnlike/likeUnlikePost.route';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function PostCardAllUser() {

      const [posts, setPosts] = useState([]);
      const [likedArray , setLikeArray] = useState([]);
      const [islikedBy , setLikedBy] = useState('')
      const [isChecked , setIsChecked] = useState('');
      const [likedPosts, setLikedPosts] = useState({}); // Map post IDs to like states
      const [isLikedByServer, setIsLikedByServer] = useState('');
      const [countLikes, setCountLikes] = useState(0);
      
      useEffect(() => {
            const getDataUseeffect = async()=>{
                  
                  const AllPostData = await fetchAllPost();
                  console.log('data', AllPostData)
                  setPosts(AllPostData.AllPost);
                  setLikeArray(AllPostData.AllPost.likedBy)

                  setLikedPosts(likedArray.reduce((acc, like) => ({ ...acc, [like._id]: true }), {}));
                  
                  const firstPostId = AllPostData.AllPost[0]._id;
                  console.log("First post ID: " , firstPostId);
                  if (firstPostId) {
                        try {
                              console.log("Inside the if statement")
                              const likeResponse = await handleLikeOnPost(firstPostId);
                              console.log("LikeResponse in useefect : " , likeResponse);
                              setIsLikedByServer(likeResponse.isLiked);
                        } catch (error) {
                              console.error("Error fetching initial like status:", error);
                        }
                  }

                  
            }
            getDataUseeffect();

            // likedArray.map((singlePost)=>{
            //       if(singlePost._id.toString() === localStorage.getItem("userId")){
            //             setIsLikedByServer(true)
            //       }
            //       else{
            //             setIsLikedByServer(false)
            //       }
            // })

            // posts.map((singlePost)=>{
            //       countNumberOfLikesOnPost(singlePost._id);
            // })

            return ()=>{}

      }, [])

      console.log(posts);
      console.log("setLIkedPost", isLikedByServer)

      const countNumberOfLikesOnPost = async (postId) => {
            // call method for getting all post and count numberOflikes.
            const FetchedLikeReponse = await CountNumberOfLikes(postId);
            const jsonFetchedResponse = await FetchedLikeReponse.json();
            console.log("josnLikeReposne", jsonFetchedResponse);
            if (jsonFetchedResponse) {
                  const postLikes = {}
                  jsonFetchedResponse.AllPost.forEach((singlePost)=>{
                        const countLikesOnPost = singlePost.likedBy.length;
                        postLikes[singlePost._id] = countLikesOnPost;
                  })

                  setLikedPosts(postLikes);
            }


      }

      const handleLikeUnlike = async (postId)=>{
            const LikeResponse = await handleLikeOnPost(postId);
            console.log("Liked Response: " , LikeResponse)
            if(LikeResponse){
                  console.log("post get liked by your" , LikeResponse.isLiked);
                  setLikedBy(LikeResponse.isLiked)
            }
            else{
                  console.log("Error on liking the post")
            }
            countNumberOfLikesOnPost(postId);
      }


      return (
            

            posts.map((post, index) => {
                  const postLike = likedPosts[post._id] || 0;
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
                                    {/* Add this propperty later on: checked={likedPosts[post._id] ?? isLikedByServer} */}
                                    <Checkbox  key={post._id} className='pt-3 text-danger' onClick={() => { handleLikeUnlike(post._id) }  } {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                    <ShowCommentOnPost postId={post._id} likeCount={postLike} className="pt-3" />

                              </Card.Text>


                        </Card.Body>
                  </Card>
            }


      ));
}

export default PostCardAllUser;

// In this, Now I have a single problem that When I unchecked the like button, then it is counting the like 1 and upon checking the button its count become 0. I want opposite of it. So correct it may be by check state of a like button.


