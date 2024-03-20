import * as React from 'react';

import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function WhatDefineYou({setUserType , showAdminRadio= false}) {
      const [selectedValue, setSelectedValue] = React.useState('');

      const handleChange = (event) => {
            const newValue = event.target.value;
            setSelectedValue(newValue);
            localStorage.setItem("userType", newValue)
            setUserType(newValue)
      };

      React.useEffect(() => {
            const storedUserType = localStorage.getItem("userType");
            if (storedUserType) {
                  setUserType(storedUserType);
                  setSelectedValue(storedUserType);
            }
      }, [setUserType]);
      // Solve the error of userType caused in the localStorage.

      const controlProps = (item) => ({
            checked: selectedValue === item,
            onChange: handleChange,
            value: item,
            name: 'color-radio-button-demo',
            inputProps: { 'aria-label': item },
      });

      
      return (
            <div style={{position:"relative", marginLeft:"12rem" }} >
                  

                  <Box display="flex"  justifyContent= "space-evenly">
                        <Box mr={2}>
                              <Radio {...controlProps('Doctor')} color="secondary" />
                              <Typography>Doctor</Typography>
                        </Box>
                        <Box mr={2}>
                              <Radio {...controlProps('Rescuer')} color="success" />
                              <Typography>Rescuer</Typography>
                        </Box>
                        <Box mr={2}>
                              <Radio {...controlProps('User')} color="default" />
                              <Typography>User</Typography>
                        </Box>
                        {
                              showAdminRadio && (<Box mr={2}>
                                    <Radio {...controlProps('Admin')} color="default" />
                                    <Typography>Admin</Typography>
                              </Box>) 
                        }
                       
                  </Box>
            </div>
      );
}
