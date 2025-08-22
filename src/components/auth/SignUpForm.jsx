import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import InputField from '../common/InputField';
import {validateForm} from '../../utils/validator';
import {Button, Box, Grid} from '@mui/material';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form Submitted:', formData);
      alert('Sign-up successful! Redirecting to login...');
      navigate('/login');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <h2 className="auth-form-h2">Create Account</h2>
      <Box sx={{width: '100%'}} className="form-top-div">
        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
          <Grid size={{xs: 12, sm: 6, md: 6}}>
            <InputField
              label="Full Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 6}}>
            <InputField
              label="Username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              error={errors.username}
            />
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 6}}>
            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 6}}>
            <InputField
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 6}}>
            <InputField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 6}}>
            <InputField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />
          </Grid>
          <Grid size={12} className="SignUpForm-button-div">
            <Button type="submit" fullWidth variant="contained">
              Sign Up
            </Button>
            <p className="auth-link">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignUpForm;
