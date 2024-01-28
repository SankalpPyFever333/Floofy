import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Swal from 'sweetalert2';


function AddProductModal() {
      const [show, setShow] = useState(false);

      const [prodName, setProdName] = useState('');
      const [category, setCategory] = useState('');
      const [price, setPrice] = useState('');
      const [description, setDescription] = useState('');
      const [quantity, setQuantity] = useState('');
      const [imagePath, setImagePath] = useState('');
      const [discountTag, setDiscountTag] = useState('');

      const handleAddItemInDb = async ()=>{
            // code for adding product in db:
            try {
                  const response = await fetch("http://localhost:3000/api/addProductInDbAdmin" , {
                        method : "POST",
                        headers:{
                              'Content-Type':"application/json"
                        },
                        body: JSON.stringify({
                              ProductName: prodName , Price:price,  Category: category , Description: description , ImagePath: imagePath, Quantity:quantity, DiscountTag: discountTag
                        })
                  })

                  if(!response.ok ){
                        // console.log("Response status is :" , response.status)
                        Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Error in adding product",
                        });
                  }
                  else{
                        Swal.fire({
                              position: "center",
                              icon: "success",
                              title: "Added successfully",
                              showConfirmButton: false,
                              timer: 1500
                        });
                  }
                  handleClose();

            } catch (error) {
                  console.log(error)
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Internal server error",
                  });
            }

      }



      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      return (
            <>
                  <Tooltip title="Add Item">
                        <IconButton onClick={handleShow}>
                              <AddIcon fontSize='large' />
                        </IconButton>
                  </Tooltip>

                  <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                              <Modal.Title>Add item</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                              <Form>
                                    <Form.Group className="mb-3" controlId="Product_Name">
                                          <Form.Label>Product name</Form.Label>
                                          <Form.Control
                                                type="text"
                                                autoFocus
                                                onChange={(e)=>{
                                                      setProdName(e.target.value)
                                                }}
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_Price">
                                          <Form.Label>Price</Form.Label>
                                          <Form.Control
                                                type="text"
                                                onChange={(e) => {
                                                      setPrice(e.target.value)
                                                }}
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_Category">
                                          <Form.Label>Category</Form.Label>
                                          <Form.Control
                                                type="text"
                                                onChange={(e) => {
                                                      setCategory(e.target.value)
                                                }}
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_Description">
                                          <Form.Label>Description</Form.Label>
                                          <Form.Control
                                                type="text"
                                                onChange={(e) => {
                                                      setDescription(e.target.value)
                                                }}
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_ImagePath">
                                          <Form.Label>Image Url</Form.Label>
                                          <Form.Control
                                                type="text"
                                                onChange={(e) => {
                                                      setImagePath(e.target.value)
                                                }}
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_Quantity">
                                          <Form.Label>Quantity</Form.Label>
                                          <Form.Control
                                                type="text"
                                                onChange={(e) => {
                                                      setQuantity(e.target.value)
                                                }}
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_DiscountTag">
                                          <Form.Label>Discount</Form.Label>
                                          <Form.Control
                                                type="text"
                                                onChange={(e) => {
                                                      setDiscountTag(e.target.value)
                                                }}
                                          />
                                    </Form.Group>
                              </Form>
                        </Modal.Body>
                        <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                    Close
                              </Button>
                              <Button variant="primary" onClick={handleAddItemInDb}>
                                    Add
                              </Button>
                        </Modal.Footer>
                  </Modal>
            </>
      );
}

export default AddProductModal;

