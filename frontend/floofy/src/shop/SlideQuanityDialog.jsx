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

export default function SlideQuanityDialog({prodCount}) {
      const [open, setOpen] = React.useState(false);
      const [prodCountInDialog , setProdCountDialog] = React.useState(0)
      
      const handleClickOpen = () => {
            localStorage.setItem("prodQuantDialog" , prodCountInDialog)
            setOpen(true);
      };
      
      const handleClose = () => {
            localStorage.setItem("prodQuantDialog" , prodCountInDialog)
            setOpen(false);
      };

      return (
            <React.Fragment>
                  <Button variant="Light"  onClick={handleClickOpen} size="sm" className='fs-4' active>
                        {prodCountInDialog === 0 ? prodCount : prodCountInDialog}
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
                                    <TextField className='mt-3' id="outlined-basic" autoFocus label="Quantity" onChange={(e)=>{
                                          setProdCountDialog(e.target.value)
                                    }} variant="outlined" />
                              </DialogContentText>    
                        </DialogContent>
                        <DialogActions>
                              <Button onClick={handleClose}>Done</Button>
                              
                        </DialogActions>
                  </Dialog>
            </React.Fragment>
      );
}