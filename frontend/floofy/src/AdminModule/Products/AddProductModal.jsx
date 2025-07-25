import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Swal from 'sweetalert2';
import { base_api } from '../../base_api';

function AddProductModal() {
      const [show, setShow] = useState(false);
      const [formData, setFormData] = useState({
            ProductName: '',
            Price: '',
            Category: '',
            Description: '',
            Quantity: '',
            DiscountTag: '',
            ExpiryDate: '',
            SuitableFor: '',
            KeyIngredients: '',
            Allergens: [],
            file: null
      });

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

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

      const handleAllergensChange = (e) => {
            const selectedAllergens = Array.from(e.target.selectedOptions, (option) => option.value);
            setFormData({ ...formData, Allergens: selectedAllergens });
      };

      const handleAddItemInDb = async () => {
            try {
                  const formDataToSend = new FormData();
                  for (let key in formData) {
                        formDataToSend.append(key, formData[key]);
                  }

                  const response = await fetch(`${base_api}/api/addProductInDbAdmin`, {
                        method: "POST",
                        body: formDataToSend
                  });

                  if (!response.ok) {
                        Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Error in adding product",
                        });
                  } else {
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
      };

      return (
            <>
                  <Tooltip title="Add Item">
                        <IconButton onClick={handleShow}>
                              <AddIcon fontSize='small' />
                        </IconButton>
                  </Tooltip>

                  <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                              <Modal.Title>Add item</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                              <Form enctype="multipart/form-data">
                                    <Form.Group className="mb-3" controlId="Product_Name">
                                          <Form.Label>Product name</Form.Label>
                                          <Form.Control
                                                type="text"
                                                autoFocus
                                                onChange={handleInputChange}
                                                name="ProductName"
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_Price">
                                          <Form.Label>Price</Form.Label>
                                          <Form.Control
                                                type="text"
                                                min="1"
                                                onChange={handleInputChange}
                                                name="Price"
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_Category">

                                          <Form.Select name='Category' onChange={handleInputChange} aria-label="Default select example">
                                                <option>Category</option>
                                                <option value="Dog Food">Dog Food</option>
                                                <option value="Cat Food">Cat Food</option>
                                                <option value="Pet Grooming">Pet Grooming</option>
                                                <option value="Clothing">Clothing</option>
                                                <option value="Bowls & Feeders">Clothing</option>
                                          </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_Description">
                                          <Form.Label>Description</Form.Label>
                                          <Form.Control
                                                type="text"
                                                onChange={handleInputChange}
                                                name="Description"
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_SuitableFor">
                                          <Form.Label>Suitable for(Age group of pet)</Form.Label>
                                          <Form.Control
                                                type="text"
                                                onChange={handleInputChange}
                                                name="SuitableFor"
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_SuitableFor">
                                          <Form.Label>Key Ingredients</Form.Label>
                                          <Form.Control
                                                type="text"
                                                onChange={handleInputChange}
                                                name="KeyIngredients"
                                          />
                                    </Form.Group>



                                    <Form.Group className="mb-3" controlId="Product_Category">

                                          <Form.Select name='Category' onChange={handleAllergensChange} aria-label="Default select example">
                                                <option>Allergens</option>
                                                <option value="Gluttem">Gluten</option>
                                                <option value="Diary">Diary</option>
                                                <option value="Soy">Soy</option>
                                                <option value="Nuts">Nuts</option>

                                          </Form.Select>
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="Product_ImagePath">
                                          <Form.Label>Image</Form.Label>
                                          <Form.Control
                                                type="file"
                                                onChange={handleFileSelect}
                                                name="file"
                                          />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="Product_Quantity">
                                          <Form.Label>Quantity(in stock)</Form.Label>
                                          <Form.Control
                                                type="text"
                                                onChange={handleInputChange}
                                                name="Quantity"
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_DiscountTag">
                                          <Form.Label>Discount (%)</Form.Label>
                                          <Form.Control
                                                type="text"
                                                onChange={handleInputChange}
                                                name="DiscountTag"
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_DiscountTag">
                                          <Form.Label>Expiry Date</Form.Label>
                                          <Form.Control
                                                type="date"
                                                onChange={handleInputChange}
                                                name="ExpiryDate"
                                          />
                                    </Form.Group>

                              </Form>
                        </Modal.Body>
                        <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                    Close
                              </Button>
                              <Button type='submit' variant="primary" onClick={handleAddItemInDb}>
                                    Add
                              </Button>
                        </Modal.Footer>
                  </Modal>
            </>
      );
}

export default AddProductModal;
