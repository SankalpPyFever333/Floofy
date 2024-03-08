import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const currencies = [
      {
            value: 'Quant1',
            label: '1',
      },
      {
            value: 'Quant2',
            label: '2',
      },
      {
            value: 'Quant3',
            label: '3',
      },
      {
            value: 'Quant4',
            label: '4',
      },
];

function SelectQuantityComp() {

  return (
    <div>
              <Box
                    component="form"
                    sx={{
                          '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
              >
                    <div>
                          <TextField
                                id="outlined-select-currency"
                                select
                                label="Quanity"
                                defaultValue="EUR"
                                
                          >
                                {currencies.map((option) => (
                                      <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                      </MenuItem>
                                ))}
                          </TextField>
                  </div>
            </Box>
    </div>
  )
}

export default SelectQuantityComp
