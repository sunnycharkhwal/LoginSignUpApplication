import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import '../components/auth/Auth.css';

const LoginPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
