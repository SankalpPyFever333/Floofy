// Sidebar.js
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdminSidebar = ({ setCurrentItem }) => {
      const navigate = useNavigate();
      const handleLogout = ()=>{
            Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Logged out",
                  showConfirmButton: false,
                  timer: 1500
            });

            // clear the cookies or localstorage when you started to save the data in that.

            navigate("/LoginAfterLogOut")
      }


      return (
            <List>
                  <IconButton onClick={() => setCurrentItem('Overview')}>
                        <ListItem>
                                    <ListItemIcon>
                                          <InboxIcon />
                                    </ListItemIcon>
                              <ListItemText primary={<span style={{ fontWeight: 'bolder' }}>Overview</span>} />
                        </ListItem>
                  </IconButton>
                  <IconButton onClick={() => setCurrentItem('Users')}>
                        <ListItem>
                                    <ListItemIcon>
                                          <InboxIcon />
                                    </ListItemIcon>
                              <ListItemText primary={<span style={{ fontWeight: 'bolder' }}>Users</span>} />
                        </ListItem>
                  </IconButton>

                  <IconButton onClick={() => setCurrentItem('Products')}>
                        <ListItem>
                                    <ListItemIcon>
                                          <DraftsIcon />
                                    </ListItemIcon>
                              <ListItemText primary = {<span style={{ fontWeight: 'bolder' }}>Products</span> }/>
                        </ListItem>
                  </IconButton>
                  <IconButton onClick={() => setCurrentItem('ProductsReviews')}>
                        <ListItem>
                                    <ListItemIcon>
                                          <DraftsIcon />
                                    </ListItemIcon>
                              <ListItemText primary = {<span style={{ fontWeight: 'bolder' }}>Products Reviews</span> }/>
                        </ListItem>
                  </IconButton>

                  <IconButton onClick={() => setCurrentItem('Orders')}>
                        <ListItem>
                                    <ListItemIcon>
                                          <DraftsIcon />
                                    </ListItemIcon>
                              <ListItemText primary = {<span style={{ fontWeight: 'bolder' }}>Orders</span> }/>
                        </ListItem>
                  </IconButton>

                  {/* <IconButton onClick={() => setCurrentItem('Requests')}>
                        <ListItem>
                                    <ListItemIcon>
                                          <DraftsIcon />
                                    </ListItemIcon>
                              <ListItemText primary = {<span style={{ fontWeight: 'bolder' }}>Requests</span> } />
                        </ListItem>
                  </IconButton> */}

                  <IconButton onClick={() => setCurrentItem('Doctors')}>
                        <ListItem>
                              <ListItemIcon>
                                    <DraftsIcon />
                                    </ListItemIcon>
                              <ListItemText primary = {<span style={{ fontWeight: 'bolder' }}>Doctors</span> } />
                        </ListItem>
                  </IconButton>

                  {/* <IconButton onClick={() => setCurrentItem('Rescuers')}>
                        <ListItem>
                              <ListItemIcon>
                                    <DraftsIcon />
                              </ListItemIcon>
                              <ListItemText primary = {<span style={{ fontWeight: 'bolder' }}>Rescuers</span> } />
                        </ListItem>
                  </IconButton> */}
                  <IconButton onClick={handleLogout}>
                        <ListItem>
                              <ListItemIcon>
                                    <DraftsIcon />
                              </ListItemIcon>
                              <ListItemText primary = {<span style={{ fontWeight: 'bolder' }}>Log out</span> } />
                        </ListItem>
                  </IconButton>

                  
            </List>
      );
};

export default AdminSidebar;
