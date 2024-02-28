import { useEffect , useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { fetchAllPost } from './getPost';

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
                        return <Card style={{ width: '18rem' }} key={index} >
                              <Card.Img variant="top" src="holder.js/100px180" />
                              <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>
                                          {post.caption}
                                    </Card.Text>
                                    
                                          {post.hashTag.map((e, index)=>{
                                               return  <Card.Text key={index} >
                                                      {e}
                                                </Card.Text>
                                          })}
                                    
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                              </Card.Body>
                        </Card>
                  }
            


            
      ));
}

export default PostCard;

