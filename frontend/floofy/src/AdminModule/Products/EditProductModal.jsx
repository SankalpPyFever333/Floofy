import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
function EditProductModal({selectedRow}) {
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const handleUpdateProductInDb = async()=>{
            // code to update product in db goes here.
            

      }

      return (
            <>
                  <Tooltip title="Edit" >
                  <IconButton onClick={handleShow} >
                        <EditIcon />
                  </IconButton>
                        
                  </Tooltip>

                  <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                              <Modal.Title>Edit Product</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                              <Form>
                                    <Form.Group className="mb-3" controlId="Product_Name">
                                          <Form.Label>Product Name</Form.Label>
                                          <Form.Control
                                                type="text"
                                                autoFocus
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_Price">
                                          <Form.Label>Price</Form.Label>
                                          <Form.Control
                                                type="text"
                                                
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_Category">
                                          <Form.Label>Category</Form.Label>
                                          <Form.Control
                                                type="text"
                                                
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_Description">
                                          <Form.Label>Description</Form.Label>
                                          <Form.Control
                                                type="text"
                                                
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_ImagePath">
                                          <Form.Label>Image Url</Form.Label>
                                          <Form.Control
                                                type="text"
                                                
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_Quantity">
                                          <Form.Label>Quantity</Form.Label>
                                          <Form.Control
                                                type="text"
                                                
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_DiscountTag">
                                          <Form.Label>Discount</Form.Label>
                                          <Form.Control
                                                type="text"
                                                
                                          />
                                    </Form.Group>
                                    
                              </Form>
                        </Modal.Body>
                        <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                    Cancel
                              </Button>
                              <Button variant="primary" onClick={handleUpdateProductInDb}>
                                    Update
                              </Button>
                        </Modal.Footer>
                  </Modal>
            </>
      );
}

export default EditProductModal;


