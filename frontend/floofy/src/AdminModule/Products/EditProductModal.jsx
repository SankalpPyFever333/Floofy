import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Swal from 'sweetalert2';

function EditProductModal({numSelected , selectedRowId}) {
      const [show, setShow] = useState(false);
      const [prodFromDb , setProdFromDb] = useState({})

      const [prodName, setProdName] = useState('');
      const [category , setCategory] = useState('')
      const [price , setPrice] = useState('');
      const [description, setDescription] = useState('');
      const [quantity, setQuantity] = useState('');
      const [imagePath , setImagePath] = useState('')
      const [discountTag , setDiscountTag] = useState('');


      const fetchedProduct = async ()=>{
            // console.log("Id in the fetched: ", selectedRowId)
            try {
                  const response = await fetch(`http://localhost:3000/api/fetchProductShowModal/${selectedRowId}`, {
                        method:"GET",
                        headers:{
                              'Content-type':"application/json"
                        }
                  })
      
                  if(!response.ok){

                        throw new Error("HTTP error " + response.status);
                  }
                  const jsonProd = await response.json();
                  const productFromDb = await jsonProd.product;
                  return productFromDb;
            } catch (error) {
                  console.log(error)
            }
      }
      const fetchProductData = async () => {
            try {
                  const fetchProdFromDb = await fetchedProduct();
                  console.log(fetchProdFromDb)
                  setProdFromDb(fetchProdFromDb)
            } catch (error) {
                  console.log(error)
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

                  const data = await response.json();
                  console.log("Updated product is" , data)
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
                        console.log(data.meessage)
                  }


            } catch (error) {
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Internal server error takes place",
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


// I have to do is that I am getting the updated product in the rsponse but not getting that updated in the table , so set it in the table.
// Also , while updating the modal , if I keep some fields as it is then it is updating the collection with empty string. So, set it in the way that if user not modifying the fields the it should take its old value not the empty value.
