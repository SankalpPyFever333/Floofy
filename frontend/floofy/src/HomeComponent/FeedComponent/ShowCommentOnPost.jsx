import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CommentIcon from '@mui/icons-material/Comment';
import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import { getCommentsOnPost } from './getCommentsOnPost';


function ShowCommentOnPost({postId}) {
      const [show, setShow] = useState(false);
      const [comment , setComment] = useState([]);

      const [showComment , setShowComment] = useState([]);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const handlePostComment = ()=>{
            // after saving the comment to database, call the fetch again to show the newly added code.
      }

      useEffect(()=>{
            const commentResponse = async ()=>{
                  const fetchCommentResponse = await getCommentsOnPost(postId);
                  if(fetchCommentResponse){
                        setShowComment(fetchCommentResponse);
                        
                  }
            }

            commentResponse();
      })
      return (
            <>
                  <IconButton className='text-info mt-2' onClick={handleShow} >
                        <CommentIcon />
                  </IconButton>

                  

                  <Offcanvas show={show} style={{ height: '50vh', backgroundColor:"", scroll:"hidden"  }} placement='bottom' onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                              <Offcanvas.Title className='w-25 p-2 fs-5' >Comments</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                              {/* use map function on the below div to show all the comment */}

                              <div className="row">
                                    <div className="showUsername font-monospace text-body-secondary fs-6 ">

                                          

                                          <p>
                                                Username
                                          </p>

                                           
                                    </div>
                                    <div className="showComment fs-6">
                                          <p>All the comments</p>
                                    </div>
                              </div>


                              <div className="row position-absolute bottom-0 start-2 w-100"  >
                                    <div className="col-sm-8">
                                          <TextField fullWidth label="Write a comment" id="fullWidth" onChange={(e) => { setComment(e.target.value) }} color='secondary'  />
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

