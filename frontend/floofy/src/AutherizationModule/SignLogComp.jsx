import React from 'react'
import "./Signup.css";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';

import FilledInput from '@mui/material/FilledInput';
import IconButton from '@mui/material/IconButton';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import "./Signup.css"
import TextField from '@mui/material/TextField';
function SignLogComp() {

      const [showPassword, setShowPassword] = React.useState(false);

      const handleClickShowPassword = () => setShowPassword((show) => !show);

      const handleMouseDownPassword = (event) => {
            event.preventDefault();
      };


  return (
    <div>
              <span>Let's setup your login credentials</span>
              <div className="inputFields">
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                          <TextField id="input-with-sx" label="Username" variant="standard" />
                    </Box>

                    <FormControl sx={{ m: 2, width: '25ch' }} variant="standard">
                          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                          <FilledInput
                                id="filled-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                // sx prop for hiding the default visibility toggle.
                                sx={{
                                      '& input[type="password"]::-ms-reveal': {
                                            display: 'none', // Hide IE default password visibility toggle
                                      },
                                      '& input[type="password"]::-ms-clear': {
                                            display: 'none', // Hide IE default clear button
                                      },
                                }}
                                endAdornment={
                                      <InputAdornment position="end">
                                            <IconButton
                                                  aria-label="toggle password visibility"
                                                  onClick={handleClickShowPassword}
                                                  onMouseDown={handleMouseDownPassword}
                                                  edge="end"

                                            >
                                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                      </InputAdornment>
                                }
                          />
                    </FormControl>
              </div>
    </div>
  )
}

export default SignLogComp
