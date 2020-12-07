import React from 'react';

import SignIn from '../../components/SignIn';
import Signup from '../../components/Signup';

import './index.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <Signup />
  </div>
);

export default SignInAndSignUpPage;