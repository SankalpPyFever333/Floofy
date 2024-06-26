import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchMyOrders } from './fetchMyOrders';
// import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Divider from '@mui/material/Divider';
// import { fetchAllProductOrder } from './fetchProductsOrder';

import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { CancelOrder } from './CancelOrder';
import Swal from 'sweetalert2';



async function createData() {


  const OrdersResponse = await fetchMyOrders(localStorage.getItem("userId"));
  const jsonOrderResponse = await OrdersResponse.json();

  const jsonFetchOrderResponse = await jsonOrderResponse.fetchedOrder;
  // console.log(jsonFetchOrderResponse)
  // console.log(jsonFetchOrderResponse.Products)
  // console.log(data);

  return jsonFetchOrderResponse.map((order) => ({
    UserName: order.User.username,
    createdAt: new Date(order.createdAt).toLocaleDateString(),
    DeliveryAddress: order.deliveryAddress,
    Status: order.status,
    RowId: order._id,
    history: order.Products.map((product) => ({
      ProductName: product.product.ProductName, // Access ProductName
      Quantity: product.quantity,
      ProductPrice: product.product.Price,
      TotalAmount: order.totalAmount
    }))
  }))
}

function Row(props) {
  const { row } = props;
  // console.log("SingleRow is: " , row);
  console.log("Row Id is:", row.RowId)
  
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const HandleOrderEdit = ()=>{
    navigate(`/GotoEditOrder?rowid=${row.RowId}&districtParam=${row.DeliveryAddress.District}&homeAddressParam=${row.DeliveryAddress.HomeAddress}&pinCodeParam=${row.DeliveryAddress.PIN}`)
  }

  const handleCancelOrder = async ()=>{
    // delete order:
    const deleteOrder = await CancelOrder(row.RowId);
    if(deleteOrder){
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Order Cancel",
        showConfirmButton: false,
        timer: 1500
      });
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed To cancel! Try Later",

      });
    }
    
  }


  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <Tooltip title="See order history" placement="top" >
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>

          </Tooltip>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.UserName}
        </TableCell>
        <TableCell align="left">{row.Status}</TableCell>
        <TableCell align="left">{row.DeliveryAddress.HomeAddress},{row.DeliveryAddress.PIN}</TableCell>
        <TableCell align="left">{row.createdAt.toString()}</TableCell>
        <TableCell align="left">
          {/* <Tooltip title="Edit Order">
            <IconButton onClick={HandleOrderEdit}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          {" / "} */}
          <Tooltip title="Cancel Order">
            <IconButton onClick={handleCancelOrder} >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </TableCell>

{/* upon clicking on the edit order button , navigate to page where he can update his address and quantity of product. So, for updating the order, write the put api. */}


      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Order history
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell align="left">Product price</TableCell>
                    <TableCell align="left">Total price</TableCell>
                    <TableCell align="left">Discount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow, index) => (
                    <>
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {historyRow.ProductName}
                        </TableCell>
                        <TableCell>{historyRow.Quantity}</TableCell>
                        <TableCell align="left">Rs.{historyRow.ProductPrice}</TableCell>
                        <TableCell align="left">Rs.
                          {parseInt(historyRow.ProductPrice) * parseInt(historyRow.Quantity)}
                        </TableCell>
                        <TableCell align="left">Rs.
                          {parseInt(historyRow.ProductPrice) * parseInt(historyRow.Quantity) - parseInt(historyRow.TotalAmount) }
                        </TableCell>
                      </TableRow>
                      <Divider />
                      <TableRow key={index}>
                        <TableCell style={{ fontWeight: "bolder" }} component="th" scope="row">
                          Total Payable Amount
                        </TableCell>
                        <TableCell style={{ fontWeight: "bolder" }} align='right' component="th" scope="row">
                          { Math.floor(historyRow.TotalAmount)}
                        </TableCell>
                      </TableRow>
                    </>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = await createData();
console.log("Rows is:", rows);


function MainViewYourOrder() {
  const[myOrders , setMyOrders] = useState({});
  const {userId} = useParams();
  // console.log("userIdIN the params" , userId)

  const fetchOrder= async(userId)=>{  
    const OrderResponse = await fetchMyOrders(userId);
    const jsonOrderResponse  = await OrderResponse.json();
    console.log("My orders: " , jsonOrderResponse);
    setMyOrders(jsonOrderResponse);
  }

  useEffect(()=>{
    fetchOrder(userId);
  }, [])

  console.log("My orders State: " , myOrders);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Username</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Delivery Address</TableCell>
            <TableCell align="left">Order Date</TableCell>
            <TableCell align="left">Cancel Order</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MainViewYourOrder


