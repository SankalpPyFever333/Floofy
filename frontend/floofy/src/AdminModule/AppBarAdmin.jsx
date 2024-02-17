import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
export default function AppBarAdmin() {
      return (
            <Box sx={{ flexGrow: 1 }}>
                  <AppBar position="static" sx={{ backgroundColor: "lightcoral" }} >
                        <Toolbar>
                              <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{ display: { xs: 'none', sm: 'block' } }}
                              >
                                    {localStorage.getItem("Username")}
                              </Typography>
                              <Box sx={{ flexGrow: 1 }} />
                              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                    <IconButton
                                          size="large"
                                          aria-label="show 7 new notifications"
                                          color="inherit"
                                    >
                                          <Badge badgeContent={7} color="error">
                                                <NotificationsIcon />
                                          </Badge>
                                    </IconButton>
                              </Box>
                        </Toolbar>
                  </AppBar>
            </Box>
      );
}
