import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import InputField from '../common/InputField';
import {Button} from '@mui/material';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Basic validation for login
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.password) newErrors.password = 'Password is required.';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Login attempt with:', formData);
      alert('Login successful!');
      // Handle login logic here (e.g., API call)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form" noValidate>
      <h2 className="auth-form-h2">Login</h2>
      <div className="form-top-div">
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
        <div className="SignUpForm-button-div">
          <Button
            type="submit"
            className="auth-button"
            fullWidth
            variant="contained">
            Login
          </Button>
          <p className="auth-link">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
