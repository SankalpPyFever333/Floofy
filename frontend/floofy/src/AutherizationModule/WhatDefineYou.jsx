import * as React from 'react';

import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function WhatDefineYou({setUserType}) {
      const [selectedValue, setSelectedValue] = React.useState('');

      const handleChange = (event) => {
            setSelectedValue(event.target.value);
      };

      const controlProps = (item) => ({
            checked: selectedValue === item,
            onChange: handleChange,
            value: item,
            name: 'color-radio-button-demo',
            inputProps: { 'aria-label': item },
      });

      localStorage.setItem("userType" , selectedValue)
      setUserType(localStorage.getItem("userType"))
      return (
            <div>
                  

                  <Box display="flex" justifyContent= "space-evenly">
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
                  </Box>
            </div>
      );
}
