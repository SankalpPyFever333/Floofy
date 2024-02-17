import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Swal from 'sweetalert2';

function EditProductModal({numSelected , selectedRowId , onUpdateProduct}) {
      const [show, setShow] = useState(false);
      const [prodFromDb , setProdFromDb] = useState({})

      const [prodName, setProdName] = useState('');
      const [category , setCategory] = useState('');
      const [price , setPrice] = useState('');
      const [description, setDescription] = useState('');
      const [quantity, setQuantity] = useState('');
      const [imagePath , setImagePath] = useState('');
      const [discountTag , setDiscountTag] = useState('');


      const fetchedProduct = async ()=>{
            // console.log("Id in the fetched: ", selectedRowId)

            if (parseInt(quantity) < 1) {
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Quantity must at least 1.",
                  });
                  return
            }

            if (parseFloat(discountTag) < 0) {
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Discount must be a positive value.",
                  });
                  return
            }

            if (parseFloat(price) < 1) {
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "price can't be negative.",
                  });
                  return
            }



            try {
                  const response = await fetch(`http://localhost:3000/api/fetchProductShowModal/${selectedRowId}`, {
                        method:"GET",
                        headers:{
                              'Content-type':"application/json"
                        }
                  })
                  if(!response.ok){
                        Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "something went wrong!!",
                        });
                  }
                  const jsonProd = await response.json();
                  const productFromDb = await jsonProd.product;
                  return productFromDb;
            } catch (error) {
                  console.log(error)
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Internal server error",
                  });
            }
      }
      const fetchProductData = async () => {
            try {
                  const fetchProdFromDb = await fetchedProduct();
                  // console.log("fetched product from db is: " , fetchProdFromDb)
                  // console.log("Updated product category is", fetchProdFromDb.Category)
                  setProdFromDb(fetchProdFromDb)
                  setProdName(fetchProdFromDb.ProductName)
                  setCategory(fetchProdFromDb.Category)
                  setDescription(fetchProdFromDb.Description)
                  setDiscountTag(fetchProdFromDb.DiscountTag)
                  setPrice(fetchProdFromDb.Price)
                  setImagePath(fetchProdFromDb.ImagePath)
                  setQuantity(fetchProdFromDb.Quantity)
            } catch (error) {
                  console.log(error)
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Internal server error",
                  });
            }
      }

      useEffect(()=>{
            
            if(numSelected === 1){
                  fetchProductData();
            }
      },[numSelected])

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const handleUpdateProductInDb = async()=>{
            // code to update product in db goes here.

            try {
                  const response = await fetch(`http://localhost:3000/api/updateProductInDbByAdmin/${selectedRowId}` , {
                        method:"PUT",
                        headers:{
                              'Content-Type':"application/json"
                        }, 
                        body: JSON.stringify({ 
                              ProductName: prodName,
                              Price: price,
                              Category: category,
                              Description: description,
                              ImagePath: imagePath,
                              Quantity: quantity,
                              DiscountTag: discountTag
                        })
                  })

                  const updatedProductData = await response.json();
                  console.log("Updated product is", updatedProductData)
                  onUpdateProduct(updatedProductData);
                  
                  if(!response.ok){
                        Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Error in updating",
                        });
                  }
                  else{
                        Swal.fire({
                              position: "center",
                              icon: "success",
                              title: "Updated successfully",
                              showConfirmButton: false,
                              timer: 1500
                        });
                        console.log(updatedProductData.meessage)
                  }
            } catch (error) {
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Internal server error",
                  });
                  console.log("Error in updation: " , error)
            }
            
            handleClose();
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
                                                value={prodFromDb.ProductName || ''}
                                                onChange={(e)=>{
                                                      setProdName(prodFromDb.ProductName = e.target.value)
                                                }}
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_Price">
                                          <Form.Label>Price</Form.Label>
                                          <Form.Control
                                                type="text"
                                                value={prodFromDb.Price || ''}
                                                onChange={(e)=>{
                                                      setPrice(prodFromDb.Price=  e.target.value)
                                                }}
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_Category">
                                          <Form.Label>Category</Form.Label>
                                          <Form.Control
                                                type="text"
                                                value={prodFromDb.Category|| ''}
                                                onChange={(e)=>{
                                                      setCategory(prodFromDb.Category = e.target.value)
                                                }}
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_Description">
                                          <Form.Label>Description</Form.Label>
                                          <Form.Control
                                                type="text"
                                                value={prodFromDb.Description|| ''}
                                                onChange={(e)=>{
                                                      setDescription(prodFromDb.Description = e.target.value)
                                                }}
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_ImagePath">
                                          <Form.Label>Image Url</Form.Label>
                                          <Form.Control
                                                type="text"
                                                value={prodFromDb.ImagePath || ''}
                                                onChange={(e)=>{
                                                      setImagePath(prodFromDb.ImagePath = e.target.value)
                                                }}
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_Quantity">
                                          <Form.Label>Quantity</Form.Label>
                                          <Form.Control
                                                type="text"
                                                value={prodFromDb.Quantity || ''}
                                                onChange={(e)=>{
                                                      setQuantity(prodFromDb.Quantity = e.target.value)
                                                }}
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_DiscountTag">
                                          <Form.Label>Discount</Form.Label>
                                          <Form.Control
                                                type="text"
                                                value={prodFromDb.DiscountTag || ''}
                                                onChange={(e)=>{
                                                      setDiscountTag(prodFromDb.DiscountTag = e.target.value)
                                                }}
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


// I have to do is that I am getting the updated product in the response but not getting that updated in the table , so set it in the table.
