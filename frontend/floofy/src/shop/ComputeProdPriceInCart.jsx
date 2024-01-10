import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

// in this cart component , show all the products added by the user.

export default function ComputeProdPriceInCart() {
      return (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                  subheader={<ListSubheader>Price Details</ListSubheader>}
            >
            
                  <Divider style={{backgroundColor:"darkgray"}}/>
                  <ListItem>
                        
                        <ListItemText primary={`price(10 items)`} />
                        
                  </ListItem>
                  <ListItem>
                        <ListItemText primary="Discount" />
                  </ListItem>
                  <ListItem>
                        <ListItemText primary="Delivery Charges" />
                  </ListItem>
                  <Divider/>
                  <ListItem>
                        <ListItemText primary="Total Amount" />
                  </ListItem>
                  <Divider/>
                  <ListItem>
                        <ListItemText primary="You will save itta paisa" />
                  </ListItem>
            </List>
      );
}
