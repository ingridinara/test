import React, { useState } from 'react';
import users from './data';
import {
  ChangePassword,
  Container,
  Form,
  Label,
  StyleRedirect,
  StyledError,
  StyledInput,
  PageStyled,
  InputLabel,
  StyledButton,
  SpanError,
} from './signinstyled';
import ProtectedRoute from './ProtectedRoute';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
//
const authenticateUser = (email, password) => {
  let authenticated = false;
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.email === email && user.password === password) {
      authenticated = true;
    }
  }
  if (authenticated) {
    console.log('the user is correct');
    localStorage.setItem('TOKENStarWars', 'starwarsmolamucho');

    return true;
  } else {
    console.error('the user is incorrect');
    return false;
  }
};

//
const SignIn = () => {
  {
    /* added */
  }
  const [isSignedIn, setIsSignedIn] = useState(false);
  // input - state
  const [userEmail, setUserEmail] = useState(''); // value - email
  const [passwordInput, setPasswordInput] = useState(''); // value - contrasena
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  //input - regex
  const validateEmail = (email) => {
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
  };
  const validatePassword = (password) => {
    var re = /[a-z]\d|\d[a-z]/i;
    return re.test(password) && password.length > 3;
  };
  //input - handleChange
  const handleChange = (e) => {
    if (e.target.name === 'userEmail') {
      setUserEmail(e.target.value); //value
      const val = e.target.value;
      const isEmail = validateEmail(val);
      console.log('Regex validate email: ', validateEmail, isEmail);
      setIsEmailError(!isEmail); // logica inversa
    } else if (e.target.name === 'passwordInput') {
      setPasswordInput(e.target.value);
      const password = e.target.value;
      const isPassword = validatePassword(password);
      setIsPasswordError(!isPassword); // logica inversa
      console.log('validate Password: ', validatePassword, isPassword);
    }
  };

  //button state
  const [loadingState, setloadingState] = useState(false);
  const [disabledState, setdisabledState] = useState(false);

  //button
  const handleClick = () => {
    console.log('clicked');
  };
  //form method
  const handleSubmit = async (e) => {
    e.preventDefault();
    setloadingState(true);
    setdisabledState(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      {
        /* added */
      }
      setIsSignedIn(authenticateUser(userEmail, passwordInput));
    } catch (err) {
      console.log(err);
    }
    setloadingState(false);
    setdisabledState(false);

    console.log('submitted', userEmail, passwordInput);
  };
  ///////////////////////////////////////////
  const [error, setError] = useState('');

  //

  return (
    <>
      {/* added */}
      {isSignedIn ? <Redirect to={{ pathname: '/home' }} /> : null}
      <PageStyled isSignedIn={isSignedIn}>
        <Container>
          <Form id="1" method="get" onSubmit={handleSubmit} autocomplete="off">
            <div>
              <InputLabel htmlFor="email">Email</InputLabel>

              <StyledInput
                type="email"
                placeholder="Introduce your email"
                value={userEmail}
                onChange={handleChange}
                id="userEmail"
                name="userEmail"
                error={isEmailError}
                errorText="Enter a valid email address..."
              ></StyledInput>
              <SpanError>
                {isEmailError ? (
                  <p>Please, introduce a valid e-mail address.</p>
                ) : null}
              </SpanError>
            </div>
            <div>
              <InputLabel htmlFor="password">Password</InputLabel>
              <StyledInput
                type="password"
                vale={passwordInput}
                placeholder="Introduce your password"
                onChange={handleChange}
                id="passwordInput"
                name="passwordInput"
                error={isPasswordError}
                minLength={6}
                errorText="The password to contain more than 6 characters and a uppercase letter"
              ></StyledInput>
              <SpanError>
                {isPasswordError ? (
                  <p>
                    A valid password must have at least 3 numbers and letters
                    combined.
                  </p>
                ) : null}
              </SpanError>
            </div>
            <ChangePassword>
              <Label htmlFor="forgottenPassword">
                <Link to="/signup">Have you forgotten your password?</Link>
              </Label>
            </ChangePassword>
            {error && (
              <StyledError>
                <p>{error}</p>
              </StyledError>
            )}
            <StyledButton
              text="Sign In"
              loadingText="Accediendo"
              iconPosition="left"
              type="submit"
              className="primary"
              isLoading={loadingState}
              disabled={disabledState}
              onClick={handleClick}
            >
              {loadingState ? <div>Loading</div> : <div>Sign In</div>}
              {/*    {authenticateUser ? (
                <Redirect to={{ pathname: '/home' }} />
           ) : null} */}
            </StyledButton>
            <StyleRedirect>
              Don't have an account yet? <Link to="/signup">Sign Up</Link>
            </StyleRedirect>
          </Form>
        </Container>
      </PageStyled>
    </>
  );
};

export default SignIn;
