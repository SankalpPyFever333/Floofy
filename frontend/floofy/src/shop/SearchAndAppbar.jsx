import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


import OpenShoppingCart from './OpenShoppingCart';
import ShoppingCartButton from './ShoppingCartButton';

const Search = styled('div')(({ theme }) => ({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
      },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: 'inherit',
      width: '100%',
      '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                  width: '12ch',
                  '&:focus': {
                        width: '20ch',
                  },
            },
      },
}));

export default function SearchAndAppbar() {
      
      return (
            <Box sx={{ flexGrow: 1 , margin:"12px"}}>
                  <AppBar position="static" >
                        <Toolbar style={
                              {
                                    backgroundColor: "blue",
                                    display: "flex",
                                    justifyContent: "space-between"
                              }
                        } >
                              <Search>
                                    <SearchIconWrapper>
                                          <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                          placeholder="Pet products"
                                          inputProps={{ 'aria-label': 'search' }}
                                    />
                              </Search>
                              {/* Instead of this , render the cart component build by me. */}
                              {/* <OpenShoppingCart/> */}
                              <ShoppingCartButton/>
                              

                              

                        </Toolbar>

                  </AppBar>
            </Box>
      );
}


