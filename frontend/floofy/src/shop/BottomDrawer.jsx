import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function BottomDrawer() {
      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
            setOpen(true);
      };

      const handleClose = () => {
            setOpen(false);
      };

      React.useEffect(()=>{
            handleClickOpen();
      } , [])
      return (
            <React.Fragment>
                  
                  <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Enter Number of Product</DialogTitle>
                        <DialogContent>
                              
                              <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label=""
                                    type="String"
                                    fullWidth
                                    variant="standard"
                              />
                        </DialogContent>
                        <DialogActions>
                              <Button onClick={handleClose}>Cancel</Button>
                              <Button onClick={handleClose}>Ok</Button>
                        </DialogActions>
                  </Dialog>
            </React.Fragment>
      );
}
