import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ProfileIconWithBadge from './ProfileIconWithBadge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CableIcon from '@mui/icons-material/Cable';
import LogoutIcon from '@mui/icons-material/Logout';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react'
export default function LeftDrawer() {
      const [state, setState] = React.useState({
            
            left: false
            
      });

      const navigate = useNavigate();

      const myListItems = [
            {text:"Shop" , icon: <ShoppingCartIcon/>},
            { text: "Vet", icon: <CableIcon />},
            { text: "Customer Support", icon: <SupportAgentIcon />}, 
            { text: "Cart", icon: <ShoppingCartIcon />},
            { text: "Log out", icon: <LogoutIcon />}
      ]
      const toggleDrawer = (anchor, open) => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                  return;
            }

            setState({ ...state, [anchor]: open });
      };

      const handleLogout = ()=>{
            Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Logged out successfully",
                  showConfirmButton: false,
                  timer: 1500
            });
            navigate("/LoginAfterLogOut")
      }

      const list = (anchor) => (
            <Box
                  sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                  role="presentation"
                  onClick={toggleDrawer(anchor, false)}
                  onKeyDown={toggleDrawer(anchor, false)}
            >
                  <List>
                        {['MyName'].map((text, index) => (
                              <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                          <ListItemIcon>
                                                {<ProfileIconWithBadge/>}
                                          </ListItemIcon>
                                          <ListItemText primary={text} />
                                    </ListItemButton>
                              </ListItem>
                        ))}
                  </List>
                  <Divider />
                  <List>
                        {myListItems.map((item, index) => (
                              <ListItem key={item.text} disablePadding>
                                    <ListItemButton onClick={item.text === "Log out" ? handleLogout : null} >
                                          <ListItemIcon>
                                                {item.icon}
                                          </ListItemIcon>
                                          <ListItemText primary={item.text} />
                                    </ListItemButton>
                              </ListItem>
                        ))}
                  </List>
            </Box>
      );

      return (
            <div>
                  {['left'].map((anchor) => (
                        <React.Fragment key={anchor}>
                              <Button onClick={toggleDrawer(anchor, true)} style={{color:'white'}}><MenuIcon/></Button>
                              <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                    style={{ zIndex: 1300 }}
                              >
                                    {list(anchor)}
                              </Drawer>
                        </React.Fragment>
                  ))}
            </div>
      );
}
