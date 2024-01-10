import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import BottomDrawer from './BottomDrawer';
import TextField from '@mui/material/TextField';

export default function DecrementIncrementBtn({productCount , AddBtn , handleAddBtn}) {
      let [count, setCount] = React.useState(productCount);
      const [openDrawer , setOpenDrawer] = React.useState(false)
      let getItemCount = 0
      const handleRemoveProduct = ()=>{
            if(productCount > 0) {
                  --count
                  setCount(count)
                  
            }
            
            if(count===0){
                  setCount(0)
                  productCount = count
                  
            }
      }
      const handleAddProduct = ()=>{
            ++count;
            setCount(count)
            
      }
      const openBottomDrawer = () => {
            setOpenDrawer(!openDrawer);
            // get the text from the textfields and set it localstorage and update the shop cart badge.
            return <BottomDrawer/>
      }
      
      
      
      return (
            
            count ? <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button sx={{ fontSize: '10px', padding: '5px 5px' }} onClick={handleRemoveProduct} >{<RemoveIcon />}</Button>
                  <Button onClick={openBottomDrawer} sx={{ fontSize: '10px', padding: '5px 5px' }}>{count}</Button>
                  {
                        openDrawer ? <BottomDrawer /> : null
                  }
                  
                  
                  <Button sx={{ fontSize: '10px', padding: '5px 5px' }} onClick={handleAddProduct} >{<AddIcon />}</Button>
            </ButtonGroup> : AddBtn
            
            
            
      );
}
