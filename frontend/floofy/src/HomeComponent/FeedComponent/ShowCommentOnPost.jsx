import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CommentIcon from '@mui/icons-material/Comment';
import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';


function ShowCommentOnPost() {
      const [show, setShow] = useState(false);
      const [comment , setComment] = useState([]);


      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const handlePostComment = ()=>{
            // after saving the comment to database, call the fetch again to show the newly added code.
      }

      return (
            <>
                  <IconButton onClick={handleShow} >
                        <CommentIcon />
                  </IconButton>

                  

                  <Offcanvas show={show} placement='bottom' onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                              <Offcanvas.Title>Comments</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                              {/* use map function on the below div to show all the comment */}

                              <div className="row">
                                    <div className="showUsername">
                                          <h5>
                                                Username
                                          </h5> 
                                    </div>
                                    <div className="showComment">
                                          <p>All the comments</p>
                                    </div>
                              </div>

                              
                              <div className="row">
                                    <div className="col-sm-8">
                                          <TextField fullWidth label="Write a comment" id="fullWidth"  onChange={(e)=>{setComment(e.target.value)}} color='secondary'  />
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

