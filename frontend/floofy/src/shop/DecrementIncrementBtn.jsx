import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import EnterPriceDialogue from './EnterPriceDialogue';
import TextField from '@mui/material/TextField';
import { useDispatch  , useSelector} from 'react-redux';

import { Add_Prod_to_Cart , Remove_Prod_From_Cart } from '../State/action-creator/Add_To_Cart_Action';


export default function DecrementIncrementBtn({productCount , AddBtn , handleAddBtn}) {
      let [Pcount, setCount] = React.useState(productCount);
      const [openPriceDialog, setOpenPriceDialog] = React.useState(false)
      const Prod_Count = useSelector(state => state.count)
      const dispatch = useDispatch();
      let getItemCount = 0
      const handleRemoveProduct = ()=>{
            
            // if(productCount > 0) {
            //       --count
            //       setCount(count)
                  
            // }
            
            // if(count===0){
            //       setCount(0)
            //       productCount = count
                  
            // }





      }
      const handleAddProduct = ()=>{
            // ++count;
            // //code for adding the product in the cart.
            // setCount(count)
            
      }
      const handleOpenPriceDialog = () => {
            setOpenPriceDialog(!openPriceDialog);
            // get the text from the textfields and set it localstorage and update the shop cart badge.
            return <EnterPriceDialogue/>
      }
      
      
      
      return (
            
            Pcount ? <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button sx={{ fontSize: '10px', padding: '5px 5px' }} onClick={()=>{dispatch(Remove_Prod_From_Cart)}} >{<RemoveIcon />}</Button>
                  <Button onClick={handleOpenPriceDialog} sx={{ fontSize: '10px', padding: '5px 5px'}}>{Prod_Count}</Button>
                  {
                        openPriceDialog ? <EnterPriceDialogue /> : null
                  }
                  
                  
                  <Button sx={{ fontSize: '10px', padding: '5px 5px' }} onClick={()=>{dispatch(Add_Prod_to_Cart)}} >{<AddIcon />}</Button>
            </ButtonGroup> : AddBtn
            
            
            
      );
}
