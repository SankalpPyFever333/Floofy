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
import SettingsInputSvideoIcon from '@mui/icons-material/SettingsInputSvideo';
import GridOnIcon from '@mui/icons-material/GridOn';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function CreatePostVideoText() {
      const [state, setState] = React.useState({
            
            bottom: false
            
      });

      const toggleDrawer = (anchor, open) => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                  return;
            }

            setState({ ...state, [anchor]: open });
      };

      const list = (anchor) => (
            <Box
                  sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                  role="presentation"
                  onClick={toggleDrawer(anchor, false)}
                  onKeyDown={toggleDrawer(anchor, false)}
            >
                  <List>
                        {['Post', 'Video', 'Text'].map((text, index) => (
                              <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                          <ListItemIcon>
                                                {index%2==0 ? <GridOnIcon/> : <SettingsInputSvideoIcon/>}
                                          </ListItemIcon>
                                          <ListItemText primary={text} />
                                    </ListItemButton>
                              </ListItem>
                        ))}
                  </List>
            </Box>
      );

      return (
            <div>
                  
                  {['bottom'].map((anchor) => (
                        <React.Fragment key={anchor}>
                              <Button onClick={toggleDrawer(anchor, true)}> <AddCircleIcon/> </Button>
                              <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                              >
                                    {list(anchor)}
                              </Drawer>
                        </React.Fragment>
                  ))}
            </div>
      );
}


