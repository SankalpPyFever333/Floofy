import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function ProductRating() {
      const [value, setValue] = React.useState(0);
      localStorage.setItem("rating", value)
      return (    
            <Box
                  sx={{
                        '& > legend': { mt: 2 },
                         
                  }}

            >
                  <Typography component="legend">Rate Product</Typography>
                  <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                              setValue(newValue);
                        }}
                  />
                  
            </Box>
      );
}