import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import DecrementIncrementBtn from './DecrementIncrementBtn';


// In this all the product are showed to user they added to the cart.
export default function ProductInCart() {
      return (
            <div className="allprodContainer"  >
                  <List
                        sx={{
                              width: '60vw',
                              bgcolor: 'background.paper',
                              overflow:"scroll",
                              
                        }}
                  >
                        <ListItem >
                              <ListItemAvatar>
                                    <Avatar>
                                          <ImageIcon />
                                    </Avatar>
                              </ListItemAvatar>
                              <ListItemText primary="Dog Food" secondary="show number of pacs " />
                              
                        </ListItem>

                  </List>
            </div>
      );
}
