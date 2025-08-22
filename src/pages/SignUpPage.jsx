import React from 'react';
import SignUpForm from '../components/auth/SignUpForm';
import '../components/auth/Auth.css';

const SignUpPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
