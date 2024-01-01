import * as React from 'react';

import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ColorRadioButtons() {
      const [selectedValue, setSelectedValue] = React.useState('a');

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

      return (
            <div>
                  <span>Place a lottie animation </span>

                  <Box display="flex" justifyContent= "space-evenly">
                        <Box mr={2}>
                              <Radio {...controlProps('b')} color="secondary" />
                              <Typography>Doctor</Typography>
                        </Box>
                        <Box mr={2}>
                              <Radio {...controlProps('c')} color="success" />
                              <Typography>Rescuer</Typography>
                        </Box>
                        <Box mr={2}>
                              <Radio {...controlProps('d')} color="default" />
                              <Typography>User</Typography>
                        </Box>
                  </Box>
            </div>
      );
}
