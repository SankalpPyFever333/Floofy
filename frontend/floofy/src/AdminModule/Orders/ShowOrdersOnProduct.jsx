import * as React from 'react';
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
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Divider from '@mui/material/Divider';
import { fetchAllProductOrder } from './fetchProductsOrder';
import Tooltip from '@mui/material/Tooltip';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { updateOrderStatus } from './updateOrderStatus';
import Swal from 'sweetalert2';

async function createData() {
      

      const OrdersResponse = await fetchAllProductOrder();
      const jsonOrderResponse = await OrdersResponse.json();
      
      const jsonFetchOrderResponse = await jsonOrderResponse.fetchedOrder;
      console.log("jsonOrder fetched: " , jsonFetchOrderResponse)
      // console.log(jsonFetchOrderResponse.Products)
      // console.log(data);

      return jsonFetchOrderResponse.map((order)=>({
            UserName: order.User.username,
            createdAt: new Date(order.createdAt).toLocaleDateString(),
            DeliveryAddress: order.deliveryAddress,
            Status: order.status,
            rowId: order._id,
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
      const [anchorEl, setAnchorEl] = React.useState(null);
      const [selectedMenuItem , setSelectedMenuItem] = React.useState("");
      const isMenuOpen = Boolean(anchorEl);
      // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
      const [open, setOpen] = React.useState(false);

      const handleProfileMenuOpen = (event) => {
            setAnchorEl(event.currentTarget);
      };
      const handleMenuClose = (selectedValue) => {
            setAnchorEl(null);
            console.log("Selected value is " , selectedValue);
            // handleMobileMenuClose();
            setSelectedMenuItem(selectedValue)
      };


      const menuId = 'primary-search-account-menu';
      const renderMenu = (
            <Menu
                  anchorEl={anchorEl}
                  anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                  }}
                  id={menuId}
                  keepMounted
                  transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                  }}
                  open={isMenuOpen}
                  onClose={()=>{handleMenuClose(null)}}
            >
                  <MenuItem onClick={() => { 
                        handleMenuClose("processing") 
                        handleUpdateOrder("processing");
                        }}>processing</MenuItem>
                  <MenuItem onClick={() => { 
                        handleMenuClose("out for delivery")
                        handleUpdateOrder("out for delivery")
                         }}>out for delivery</MenuItem>
                  <MenuItem onClick={() => { 
                        handleMenuClose('delivered')
                        handleUpdateOrder("delivered")
                         }}>delivered</MenuItem>
                  <MenuItem onClick={() => { 
                        handleMenuClose('cancellled')
                        handleUpdateOrder("cancellled")
                  }}>cancellled</MenuItem>
            </Menu>
      );

      console.log("sleected value outside update: " , selectedMenuItem);
      const handleUpdateOrder = async(orderStatus)=>{
            // call method of updating status.

            // console.log("sleected value in update:" , selectedMenuItem);
            const OrderStatus = await updateOrderStatus(row.rowId, orderStatus);
            const jsonUpdateOrderStatus = await OrderStatus.json();
            // make a usestate to store this updated response and set it in the table.
            console.log("updateStatus: " , jsonUpdateOrderStatus);
            if(jsonUpdateOrderStatus){
                  Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Status Updated",
                        showConfirmButton: false,
                        timer: 1500
                  });
            }else{
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Error! Try later",
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
                              <Tooltip title="Update Order Status" >
                                    <IconButton aria-controls={menuId}  onClick={handleProfileMenuOpen} >
                                          {/* upon clicing, give the option to choose order status */}
                                          <LocalShippingIcon/>
                                    </IconButton>
                              </Tooltip>
                        </TableCell>
                        
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
                                                      </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                      {row.history.map((historyRow , index) => (
                                                            <>
                                                            <TableRow key={index}>
                                                                  <TableCell component="th" scope="row">
                                                                        {historyRow.ProductName}
                                                                  </TableCell>
                                                                  <TableCell>{historyRow.Quantity}</TableCell>
                                                                  <TableCell align="left">{historyRow.ProductPrice}</TableCell>
                                                                  <TableCell align="left">
                                                                              {parseInt(historyRow.ProductPrice) * parseInt(historyRow.Quantity)}
                                                                  </TableCell>
                                                            </TableRow>
                                                            <Divider/>
                                                            <TableRow key={index}>
                                                                  <TableCell style={{fontWeight:"bolder"}} component="th" scope="row">
                                                                        Total Amount
                                                                  </TableCell>
                                                                        <TableCell style={{ fontWeight: "bolder" }} align='right' component="th" scope="row">
                                                                              {historyRow.TotalAmount}
                                                                        </TableCell>
                                                            </TableRow>
                                                            </>
                                                      ))}
                                                </TableBody>
                                          </Table>
                                    </Box>
                              </Collapse>
                        </TableCell>
                        {renderMenu}
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

const rows =  await createData();
console.log("Rows is:" , rows);

export default function ShowOrdersOnProducts() {
      
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
                                    <TableCell align="left">Update Status</TableCell>
                              </TableRow>
                        </TableHead>
                        <TableBody>
                              {rows.map((row , index) => (
                                    <Row key={index} row={row} />
                              ))}
                        </TableBody>
                  </Table>
            </TableContainer>
      );
}