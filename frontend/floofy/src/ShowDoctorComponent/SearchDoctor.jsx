import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

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

export default function SearchDoctor({ setSearchQuery }) {
      const navigate = useNavigate();

      const handleViewOrders = () => {
            navigate(`/viewYourOrders/${localStorage.getItem("userId")}`)
      }

      const handleSearchValue = (e) => {

      }

      return (
            <Box sx={{ flexGrow: 1, marginBottom: "12px" }}>
                  <AppBar position="static" >
                        <Toolbar style={
                              {
                                    backgroundColor: "#F9E8C9",
                                    display: "flex",
                                    justifyContent: "space-between"
                              }
                        } >
                              <Search onChange={(e) => { setSearchQuery(e.target.value) }} className='bg-light text-success' >
                                    <SearchIconWrapper>
                                          <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                          placeholder="Search Doctors"
                                          inputProps={{ 'aria-label': 'search' }}
                                    />
                              </Search>
                              

                        </Toolbar>

                  </AppBar>
            </Box>
      );
}


