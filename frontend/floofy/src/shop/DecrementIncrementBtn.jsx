import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import EnterPriceDialogue from './EnterPriceDialogue';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveItemFromCart , AddItemToCart } from '../AllStateOfApplication/actions/AddRemoveItemFromCart.action';

export default function DecrementIncrementBtn({ productId, product ,   productCount, setProductCount,  AddBtn , handleAddBtn}) {
      let [Pcount, setCount] = React.useState(productCount);
      const [openPriceDialog, setOpenPriceDialog] = React.useState(false)
      const ProductFromReducer = useSelector(state => state.cartItems)
      console.log(ProductFromReducer)
      const dispatch = useDispatch();

      const handleAddProductToCart = ()=>{
            dispatch({ type: "Add_Item_To_Cart", payload: product});
      }

      const handleRemoveProductFromCart = ()=>{
            dispatch({ type:"Decrement_Quantity" , payload:productId})

            // console.log("prodcount: ", countProduct)

            // check this condition later on.

            // if(countProduct===1){
            //       setProductCount(0)
            // }

      }


      // Complete this redux part for the cart management





      // const handleRemoveProduct = ()=>{
            
      //       // if(productCount > 0) {
      //       //       --Pcount
      //       //       setCount(Pcount)
                  
      //       // }
            
      //       // if (Pcount ===0){
      //       //       setCount(0)
      //       //       // Pcount = productCount
      //       //       setProductCount(Pcount)
      //       // }



      // }


      // const handleAddProduct = ()=>{
      //       // ++Pcount;
      //       // //code for adding the product in the cart.
      //       // setCount(Pcount)
            


      // }
      const handleOpenPriceDialog = () => {
            setOpenPriceDialog(!openPriceDialog);
            // get the text from the textfields and set it localstorage and update the shop cart badge.
            return <EnterPriceDialogue/>
      }
      return (
            
            productCount ? <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button sx={{ fontSize: '10px', padding: '5px 5px' }} onClick={handleRemoveProductFromCart} >{<RemoveIcon />}</Button>
                  <Button onClick={handleOpenPriceDialog} sx={{ fontSize: '10px', padding: '5px 5px' }}>{ProductFromReducer[0].quantity}</Button>
                  {
                        openPriceDialog ? <EnterPriceDialogue /> : null
                  }
                  <Button sx={{ fontSize: '10px', padding: '5px 5px' }} onClick={handleAddProductToCart} >{<AddIcon />}</Button>
            </ButtonGroup>
            : AddBtn
      );
}
