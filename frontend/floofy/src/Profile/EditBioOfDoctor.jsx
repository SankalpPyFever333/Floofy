import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function EditBioOfDoctor() {
      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
            setOpen(true);
      };

      const handleClose = () => {
            setOpen(false);
      };

      return (
            <React.Fragment>
                  <Button variant="outlined" onClick={handleClickOpen}>
                        Edit Profile
                  </Button>
                  <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogContent>
                              
                              <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Name"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                              />
                              <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Userame"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                              />
                              <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Bio"
                                    type="text"
                                    fullWidth
                                    multiline
                                    maxRows={3}
                                    variant="standard"
                              />
                        </DialogContent>
                        <DialogActions>
                              <Button onClick={handleClose}>Cancel</Button>
                              <Button onClick={handleClose}>Update</Button>
                        </DialogActions>
                  </Dialog>
            </React.Fragment>
      );
}



