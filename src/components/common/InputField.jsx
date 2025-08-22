import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const InputField = ({label, type, name, value, onChange, error}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const inputType =
    type === 'password' ? (showPassword ? 'text' : 'password') : type;

  return (
    <TextField
      label={label}
      type={inputType}
      name={name}
      value={value}
      onChange={onChange}
      variant="standard"
      fullWidth
      margin="dense"
      error={!!error}
      helperText={error || ' '}
      InputProps={
        type === 'password'
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
    />
  );
};

export default InputField;
