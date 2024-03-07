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

const MainInventorySidebar = ({ setCurrentItem }) => {
      const navigate = useNavigate();
      
      const handleMoveToAdmin = ()=>{
            navigate("/MoveToAdminPanel")
      }

      return (
            <List>
                  <IconButton onClick={() => setCurrentItem('ProductInventory')}>
                        <ListItem>
                              <ListItemIcon>
                                    <InboxIcon />
                              </ListItemIcon>
                              <ListItemText primary={<span style={{ fontWeight: 'bolder' }}>Product Inventory</span>} />
                        </ListItem>
                  </IconButton>
                  <IconButton onClick={handleMoveToAdmin}>
                        <ListItem>
                              <ListItemIcon>
                                    <InboxIcon />
                              </ListItemIcon>
                              <ListItemText primary={<span style={{ fontWeight: 'bolder' }}>Admin Panel</span>} />
                        </ListItem>
                  </IconButton>
                  
            </List>
      );
};

export default MainInventorySidebar;
