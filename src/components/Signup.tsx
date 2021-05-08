import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import 'styles/Signup.scss';
import { signup } from 'actions/auth';
import Header from 'components/Header';
import Input from 'components/Input';
import Wrapper from 'components/Wrapper';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async () => {
    await signup({ email, password, repeatedPassword });
  };

  return (
    <div className="Signup">
      <Header title="Log in" />
      <Wrapper className="content">
        <h2>Sign up</h2>
        <form className="signup-form">
          <Input
            label="Email"
            type="email"
            handleChange={setEmail}
          />
          <Input
            label="Password"
            type="password"
            handleChange={setPassword}
          />
          <Input
            label="Repeat password"
            type="password"
            handleChange={setRepeatedPassword}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSignup}
          >
            Sign up
          </Button>
        </form>
        <p>Already have a account?</p>
        <Link to="/login">Log in</Link>
      </Wrapper>
    </div>
  );
}