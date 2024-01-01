import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function DecrementIncrementBtn({productCount , AddBtn , handleAddBtn}) {
      let [count, setCount] = React.useState(productCount);
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
      return (
            
            count ? <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button sx={{ fontSize: '10px', padding: '5px 5px' }} onClick={handleRemoveProduct} >{<RemoveIcon />}</Button>
                  <Button sx={{ fontSize: '10px', padding: '5px 5px' }}>{count}</Button>
                  <Button sx={{ fontSize: '10px', padding: '5px 5px' }} onClick={handleAddProduct} >{<AddIcon />}</Button>
            </ButtonGroup> : AddBtn
            
            
            
      );
}
