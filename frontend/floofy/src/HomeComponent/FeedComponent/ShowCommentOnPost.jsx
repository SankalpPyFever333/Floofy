import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CommentIcon from '@mui/icons-material/Comment';
import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import { getCommentsOnPost } from './getCommentsOnPost';
import { postComment } from './postComment';
import Swal from 'sweetalert2';
import Tooltip from '@mui/material/Tooltip';
import { CountNumberOfLikes } from './countLikesONPost';


function ShowCommentOnPost({postId , likeCount}) {
      const [show, setShow] = useState(false);
      const [comment , setComment] = useState();

      const [showComment , setShowComment] = useState([]);
      
      const handleClose = () => setShow(false);
      const handleShow = () => {

            
            setShow(true);

      }

      

      const handlePostComment = async ()=>{
            // after saving the comment to database, call the fetch again to show the newly added code.
            try {
                  
                  const postCommentOnPost = await postComment(comment , localStorage.getItem("userId") , postId, );
                  console.log(postCommentOnPost)
      
                  if(postCommentOnPost){
                        Swal.fire({
                              position: "center",
                              icon: "success",
                              title: "comment posted",
                              showConfirmButton: false,
                              timer: 1500
                        });
                        commentResponse();
                        setComment('')
                  }
                  else{
                        Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Error!! Try Later",
      
                        });
                  }
            } catch (error) {
                  console.log(error);
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Server Error Found",

                  });
            }

      }


      const commentResponse = async () => {
            const fetchCommentResponse = await getCommentsOnPost(postId);
            console.log("comment reponse:", fetchCommentResponse);
            if (fetchCommentResponse) {
                  setShowComment(fetchCommentResponse.AllComments);
            }
      }

      useEffect(()=>{
            commentResponse();
            // countNumberOfLikesOnPost();
      },[]);

      console.log("comment is " , showComment);
      return (
            <>
                  <Tooltip title='comments' placement='top' >
                        <IconButton className='text-info mt-2' onClick={handleShow} >
                              <CommentIcon />
                        </IconButton>

                  </Tooltip>

                  <div className="d-flex gap-2">
                        <small>Likes: {likeCount} </small>
                        <small>comments {showComment.length} </small>
                  </div>
                  <Offcanvas show={show} style={{ height: '50vh', backgroundColor:"", scroll:"hidden"  }} placement='bottom' onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                              <Offcanvas.Title className='w-25 p-2 fs-5' >Comments</Offcanvas.Title>
                              
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                              {/* use map function on the below div to show all the comment */}

                              <div className="row">
                                    <div className="showUsername font-monospace text-body-secondary fs-6 ">

                                          {
                                                showComment.map((singleComment)=>{
                                                      // console.log(singleComment.user.username)
                                                      return <div>
                                                            <p>
                                                                  {singleComment.user.username}
                                                            </p>
                                                            
                                                            <small>{singleComment.content}</small>
                                                            
                                                            <hr className='h-1 shadow' />
                                                      </div>
                                                })
                                          }
                                    </div>
                                    
                              </div>


                              <div className="row position-absolute  bottom-0 start-2 w-100"  >
                                    <div className="col-sm-8">
                                          <TextField fullWidth label="Write a comment" value={comment} id="fullWidth" onChange={(e) => {
                                                setComment(e.target.value)

                                          }} color='secondary'  />
                                    </div>
                                    <div className="col-sm-2">
                                          <Button variant="info"  onClick={handlePostComment} style={{height:"3.5rem" , width:"4rem"}} >Post</Button>{' '}
                                    </div>
                              </div>
                        </Offcanvas.Body>
                  </Offcanvas>
            </>
      );
}

export default ShowCommentOnPost;

