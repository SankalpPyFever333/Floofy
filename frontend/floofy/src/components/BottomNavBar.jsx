import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CableIcon from '@mui/icons-material/Cable';
import ProfileIconWithBadge from './ProfileIconWithBadge';


export default function BottomNavBar({ onButtonClick }) {
      const [value, setValue] = React.useState('recents');

      const handleChange = (event, newValue) => {
            setValue(newValue);
      };

      return (
            <BottomNavigation sx={{ width: '100%' , display:'flex', justifyContent:"space-between" }} value={value} onChange={handleChange}>
                  <BottomNavigationAction
                        label="Home"
                        value="Home"
                        icon={<HomeIcon />}
                        onClick={()=>{
                              onButtonClick("Home")
                        }}
                  />
                  
                        <BottomNavigationAction
                              label="Shop"
                              value="Shop"
                              icon={<ShoppingCartIcon />}
                              onClick={()=>{
                                    
                                    onButtonClick("Shop")
                              }}
                        />
                        <BottomNavigationAction
                              label="Vet"
                              value="Vet"
                              icon={<CableIcon />}
                              onClick={()=>{
                                    onButtonClick("Vet")
                              }}
                        />
                        <BottomNavigationAction
                              label="Profile"
                              value="Profile"
                              icon={<ProfileIconWithBadge/>}
                              onClick={()=>{
                                    onButtonClick("Profile")
                              }}
                        />
            </BottomNavigation>
      );
}
