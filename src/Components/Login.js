import React from 'react';
import logo from './communityBank.svg';
import './Login.css';

const Login = () => {
  const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback');
  const link = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/login?client=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}`

  return (
    <div className="login">
      <h1>Login</h1>
      <img src={logo} />
      <div>
        <a href={link}>Login</a>
      </div>
    </div>
  );
};

export default Login;