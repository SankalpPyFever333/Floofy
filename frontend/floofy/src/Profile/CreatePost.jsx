import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

function CreatePost() {

      const [title, setTitle] = useState(null);
      const [caption, setCaption] = useState("");

      const [imagePath ,   setImage] = useState("");
      const [hashtags , sethashTags] = useState("");

      const handleFileSelect = (e) => {
            const selectedFile = e.target.files[0];
            if (selectedFile) {
                  // Get the path of the selected file
                  const imagePath = URL.createObjectURL(selectedFile);
                  // Set the path in the state
                  setImage(imagePath);
            }
      };


      const handleSavePost = async ()=>{
            const createNewPost = await fetch("http://localhost:3000/api/createPost" , {
                  method:"POST",
                  headers:{
                        "Content-Type":"application/json"
                  },
                  body: JSON.stringify({ title: title, caption: caption, Image: imagePath, userId: localStorage.getItem("userId") , hashTag: hashtags })
            });

            if(createNewPost.ok){
                  Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Created post successfully",
                        showConfirmButton: false,
                        timer: 1500
                  });
            }
            else{
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        
                  });
            }

      }

  return (
    <div>
              <TextField style={{ margin: "12px" }} id="filled-basic" label="Title" variant="filled" onChange= {(e)=>{
                  setTitle(e.target.value)
              }}  />
              <br />
              <TextField style={{ margin: "12px" }} id="filled-basic" label="Caption" variant="filled" onChange={(e) => {
                    setCaption(e.target.value)
              }} />
              <br />
              
              <Form.Group className="mb-3" controlId="Product_ImagePath">
                    {/* <Form.Label>Image Url</Form.Label>
                    <Form.Control
                          type="text"
                          value={imagePath} // Display the selected file path
                          onChange={(e) => {
                                setImage(e.target.value);
                          }}
                    /> */}
                    <Form.Control type="file" onChange={handleFileSelect} /> {/* File input */}
              </Form.Group>
              <br />
              <TextField style={{ margin: "12px" }} id="filled-basic" label="hashtags " variant="filled" onChange={(e) => {
                    sethashTags(e.target.value)
              }} />
              <br />
              <Button variant="info" onClick={handleSavePost} >Post</Button>{' '}
    </div>
  )
}

export default CreatePost
