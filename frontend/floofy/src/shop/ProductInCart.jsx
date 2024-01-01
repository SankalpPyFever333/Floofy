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

export default function ProductInCart() {
      return (
            <div className="allprodContainer">
                  <List
                        sx={{
                              width: '60vw',
                              bgcolor: 'background.paper',
                              overflow:"auto",
                              height:382,
                        }}
                  >
                        <ListItem>
                              <ListItemAvatar>
                                    <Avatar>
                                          <ImageIcon />
                                    </Avatar>
                              </ListItemAvatar>
                              <ListItemText primary="Dog Food" secondary="Dec 29, 2023" />
                        </ListItem>
                        <Divider variant="inset" component="li" style={{ backgroundColor: 'darkgrey' }} />
                        <ListItem>
                              <ListItemAvatar>
                                    <Avatar>
                                          <WorkIcon />
                                    </Avatar>
                              </ListItemAvatar>
                              <ListItemText primary="Cat food" secondary="Dec 7, 2023" />
                        </ListItem>
                        <Divider variant="inset" component="li" style={{ backgroundColor: 'darkgrey' }} />
                        <ListItem>
                              <ListItemAvatar>
                                    <Avatar>
                                          <BeachAccessIcon />
                                    </Avatar>
                              </ListItemAvatar>
                              <ListItemText primary="Food2" secondary="July 20, 2014" />
                        </ListItem>
                        <ListItem>
                              <ListItemAvatar>
                                    <Avatar>
                                          <BeachAccessIcon />
                                    </Avatar>
                              </ListItemAvatar>
                              <ListItemText primary="food3" secondary="July 20, 2014" />
                        </ListItem>
                        <ListItem>
                              <ListItemAvatar>
                                    <Avatar>
                                          <BeachAccessIcon />
                                    </Avatar>
                              </ListItemAvatar>
                              <ListItemText primary="food3" secondary="July 20, 2014" />
                        </ListItem>
                        <ListItem>
                              <ListItemAvatar>
                                    <Avatar>
                                          <BeachAccessIcon />
                                    </Avatar>
                              </ListItemAvatar>
                              <ListItemText primary="food3" secondary="July 20, 2014" />
                        </ListItem>
                        
                  </List>
            </div>
      );
}
