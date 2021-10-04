import React from 'react';
import SignIn from '../../component/SignIn/SignIn';
import SignUp from '../../component/SignUp/SignUp';
import { SignInAndSignUpPageContainer } from './SignInAndSignUpPage.styles';

const SignInAndSignUpPage = () => {
    return (
        <SignInAndSignUpPageContainer>
            <SignIn/>
            <SignUp/>
        </SignInAndSignUpPageContainer>
    );
};

export default SignInAndSignUpPage;