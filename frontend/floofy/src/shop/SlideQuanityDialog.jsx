import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';

const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
});

export default function SlideQuanityDialog({prodCount , prodQuantityEdit}) {
      const [open, setOpen] = React.useState(false);
      console.log("quant in dialog," , prodQuantityEdit);


      const handleClickOpen = () => {
            setOpen(true);
      };

      const handleClose = () => {
            setOpen(false);
      };

      return (
            <React.Fragment>
                  <Button variant="Light"  onClick={handleClickOpen} size="sm" className='fs-4' active>
                        { prodQuantityEdit ? prodQuantityEdit : prodCount}
                  </Button>{' '}
                  <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                        
                  >
                        <DialogTitle className='shadow' >Enter Quanity</DialogTitle>
                        
                        <DialogContent >
                              <DialogContentText id="alert-dialog-slide-description">
                                    <TextField className='mt-3' id="outlined-basic" label="Quanity" variant="outlined" />
                              </DialogContentText>    
                        </DialogContent>
                        <DialogActions>
                              <Button onClick={handleClose}>Done</Button>
                              
                        </DialogActions>
                  </Dialog>
            </React.Fragment>
      );
}