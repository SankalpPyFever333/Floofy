import React, { useState } from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';


function CreatePost() {

      const [formData, setFormData] = useState({
            title: '',
            caption: '',
            hashTag: '',
            userId:  localStorage.getItem('userId'),
            file: null
      });



      const handleFileSelect = (e) => {
            const selectedFile = e.target.files[0];
            if (selectedFile) {
                  setFormData({
                        ...formData,
                        file: selectedFile
                  });
            }
      };

      const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
      };


      const handleSavePost = async ()=>{
            
            try {

                  const formDataToSend = new FormData();
                  for (let key in formData) {
                        formDataToSend.append(key, formData[key]);
                  }

                  const createNewPost = await fetch("http://localhost:3000/api/createPost" , {
                        method:"POST",
                        
                        body: formDataToSend
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
            } catch (error) {
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Server error!",

                  });
            }

      }

  return (
    <div>

            <div className="row">
                  <div className="col-sm-5">

                  </div>

                  <div className="col-sm-7">

                          <Form enctype="multipart/form-data">
                                <Form.Group className="mb-3" controlId="Product_Name">
                                      <Form.Label>Title</Form.Label>
                                      <Form.Control
                                            type="text"
                                            autoFocus
                                            onChange={handleInputChange}
                                            name="title"
                                      />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Product_Name">
                                      <Form.Label>Caption</Form.Label>
                                      <Form.Control
                                            type="text"
                                            autoFocus
                                            onChange={handleInputChange}
                                            name="caption"
                                      />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Product_Name">
                                      <Form.Label>Hashtags</Form.Label>
                                      <Form.Control
                                            type="text"
                                            autoFocus
                                            onChange={handleInputChange}
                                            name="hashTag"
                                      />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="Product_ImagePath">
                                      <Form.Label>Image</Form.Label>
                                      <Form.Control
                                            type="file"
                                            onChange={handleFileSelect}
                                            name="file"
                                      />
                                </Form.Group>

                        </Form>

                          
                          <Button variant="info" onClick={handleSavePost} >Post</Button>{' '}
                  </div>
            </div>

              
    </div>
  )
}

export default CreatePost
